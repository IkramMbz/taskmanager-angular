import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskeComponent } from './taske.component';

describe('TaskeComponent', () => {
  let component: TaskeComponent;
  let fixture: ComponentFixture<TaskeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskeComponent]
    });
    fixture = TestBed.createComponent(TaskeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
