import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WxbindComponent } from './wxbind.component';

describe('WxbindComponent', () => {
  let component: WxbindComponent;
  let fixture: ComponentFixture<WxbindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxbindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxbindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
