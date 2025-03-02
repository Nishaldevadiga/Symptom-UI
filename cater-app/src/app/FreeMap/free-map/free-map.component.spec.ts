import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeMapComponent } from './free-map.component';

describe('FreeMapComponent', () => {
  let component: FreeMapComponent;
  let fixture: ComponentFixture<FreeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
