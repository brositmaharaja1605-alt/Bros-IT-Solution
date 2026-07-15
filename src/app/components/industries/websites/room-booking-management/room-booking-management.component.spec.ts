import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBookingManagementComponent } from './room-booking-management.component';

describe('RoomBookingManagementComponent', () => {
  let component: RoomBookingManagementComponent;
  let fixture: ComponentFixture<RoomBookingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomBookingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
