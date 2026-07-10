import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalShopComponent } from './medical-shop.component';

describe('MedicalShopComponent', () => {
  let component: MedicalShopComponent;
  let fixture: ComponentFixture<MedicalShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
