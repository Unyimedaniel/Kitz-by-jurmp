import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsTickerComponent } from './brands-ticker.component';

describe('BrandsTickerComponent', () => {
  let component: BrandsTickerComponent;
  let fixture: ComponentFixture<BrandsTickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandsTickerComponent]
    });
    fixture = TestBed.createComponent(BrandsTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
