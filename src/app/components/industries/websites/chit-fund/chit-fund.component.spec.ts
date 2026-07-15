import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitFundComponent } from './chit-fund.component';

describe('ChitFundComponent', () => {
  let component: ChitFundComponent;
  let fixture: ComponentFixture<ChitFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChitFundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChitFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
