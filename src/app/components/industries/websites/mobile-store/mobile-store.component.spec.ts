import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileStoreComponent } from './mobile-store.component';

describe('MobileStoreComponent', () => {
  let component: MobileStoreComponent;
  let fixture: ComponentFixture<MobileStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
