import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WxnoticeComponent } from './wxnotice.component';

describe('WxnoticeComponent', () => {
  let component: WxnoticeComponent;
  let fixture: ComponentFixture<WxnoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxnoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
