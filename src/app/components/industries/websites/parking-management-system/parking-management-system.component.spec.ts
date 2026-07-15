import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingManagementSystemComponent } from './parking-management-system.component';

describe('ParkingManagementSystemComponent', () => {
  let component: ParkingManagementSystemComponent;
  let fixture: ComponentFixture<ParkingManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingManagementSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParkingManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
