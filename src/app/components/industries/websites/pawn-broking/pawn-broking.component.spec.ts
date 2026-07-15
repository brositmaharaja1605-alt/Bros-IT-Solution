import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawnBrokingComponent } from './pawn-broking.component';

describe('PawnBrokingComponent', () => {
  let component: PawnBrokingComponent;
  let fixture: ComponentFixture<PawnBrokingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PawnBrokingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PawnBrokingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
