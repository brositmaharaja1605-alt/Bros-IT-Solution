import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPosComponent } from './restaurant-pos.component';

describe('RestaurantPosComponent', () => {
  let component: RestaurantPosComponent;
  let fixture: ComponentFixture<RestaurantPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantPosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
