import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpSystemComponent } from './erp-system.component';

describe('ErpSystemComponent', () => {
  let component: ErpSystemComponent;
  let fixture: ComponentFixture<ErpSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
