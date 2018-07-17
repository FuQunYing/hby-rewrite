import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDeviceModalComponent } from './set-device-modal.component';

describe('SetDeviceModalComponent', () => {
  let component: SetDeviceModalComponent;
  let fixture: ComponentFixture<SetDeviceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDeviceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDeviceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
