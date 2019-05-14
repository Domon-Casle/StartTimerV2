import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTimerComponent } from './sub-timer.component';

describe('SubTimerComponent', () => {
  let component: SubTimerComponent;
  let fixture: ComponentFixture<SubTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
