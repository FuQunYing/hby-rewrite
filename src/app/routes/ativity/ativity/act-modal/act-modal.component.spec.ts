import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActModalComponent } from './act-modal.component';

describe('ActModalComponent', () => {
  let component: ActModalComponent;
  let fixture: ComponentFixture<ActModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
