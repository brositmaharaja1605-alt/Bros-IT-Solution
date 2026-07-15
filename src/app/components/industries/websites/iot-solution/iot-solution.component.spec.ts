import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotSolutionComponent } from './iot-solution.component';

describe('IotSolutionComponent', () => {
  let component: IotSolutionComponent;
  let fixture: ComponentFixture<IotSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IotSolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IotSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
