import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskedComponent } from './tasked.component';

describe('TaskedComponent', () => {
  let component: TaskedComponent;
  let fixture: ComponentFixture<TaskedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskedComponent]
    });
    fixture = TestBed.createComponent(TaskedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
