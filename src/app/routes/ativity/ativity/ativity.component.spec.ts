import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivityComponent } from './ativity.component';

describe('AtivityComponent', () => {
  let component: AtivityComponent;
  let fixture: ComponentFixture<AtivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
