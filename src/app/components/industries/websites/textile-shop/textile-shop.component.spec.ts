import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextileShopComponent } from './textile-shop.component';

describe('TextileShopComponent', () => {
  let component: TextileShopComponent;
  let fixture: ComponentFixture<TextileShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextileShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextileShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
