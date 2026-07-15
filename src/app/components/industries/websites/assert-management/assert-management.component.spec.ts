import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertManagementComponent } from './assert-management.component';

describe('AssertManagementComponent', () => {
  let component: AssertManagementComponent;
  let fixture: ComponentFixture<AssertManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssertManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssertManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
