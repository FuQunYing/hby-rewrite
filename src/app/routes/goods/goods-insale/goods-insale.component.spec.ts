import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsInsaleComponent } from './goods-insale.component';

describe('GoodsInsaleComponent', () => {
  let component: GoodsInsaleComponent;
  let fixture: ComponentFixture<GoodsInsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsInsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsInsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
