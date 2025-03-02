import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateTo(page: string) {
    if (page === 'bot') {
      window.open('http://localhost:8501/', '_blank');
    } else {
      this.router.navigate([`/${page}`]);
    }
  }
}

