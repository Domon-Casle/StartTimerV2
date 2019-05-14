import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTimerComponent } from './parent-timer.component';

describe('ParentTimerComponent', () => {
  let component: ParentTimerComponent;
  let fixture: ComponentFixture<ParentTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
