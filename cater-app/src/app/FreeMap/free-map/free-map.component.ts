import { Component, ElementRef, ViewChild } from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-free-map',
  templateUrl: './free-map.component.html',
  styleUrl: './free-map.component.css',
  standalone:false
})
export class FreeMapComponent {

  @ViewChild('map', { static: false }) mapElement!: ElementRef;
  private map!: L.Map;

  // Define clinic locations as a class property
  clinicLocations: { name: string; lat: number; lng: number }[] = [
    { name: "Boston Medical Center", lat: 42.3346, lng: -71.0776 },
    { name: "Massachusetts General Hospital", lat: 42.3626, lng: -71.0695 },
    { name: "Brigham and Women's Hospital", lat: 42.3364, lng: -71.1055 },
    { name: "Beth Israel Deaconess Medical Center", lat: 42.3411, lng: -71.1071 },
    { name: "Tufts Medical Center", lat: 42.3495, lng: -71.0637 },
    { name: "Boston Children's Hospital", lat: 42.3376, lng: -71.1056 },
    { name: "Dana-Farber Cancer Institute", lat: 42.3374, lng: -71.1085 },
    { name: "Cambridge Health Alliance", lat: 42.3719, lng: -71.1044 },
    { name: "Mount Auburn Hospital", lat: 42.3752, lng: -71.1413 },
    { name: "New England Baptist Hospital", lat: 42.3289, lng: -71.1085 }
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const boston: L.LatLngExpression = [42.3601, -71.0589];
  
    this.map = L.map(this.mapElement.nativeElement, {
      center: boston,
      zoom: 12
    });
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(this.map);
  
    // Define a custom marker icon
    const customIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],  // Size of the icon
      iconAnchor: [12, 41], // Anchor point of the icon
      popupAnchor: [1, -34] // Position of the popup relative to the icon
    });
  
    // Add markers for clinic locations
    this.clinicLocations.forEach(clinic => {
      L.marker([clinic.lat, clinic.lng], { icon: customIcon })
        .bindPopup(`<b>${clinic.name}</b>`)
        .addTo(this.map);
    });
  }
}
