import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingTodoItemComponent } from './existing-todo-item.component';

describe('ExistingTodoItemComponent', () => {
  let component: ExistingTodoItemComponent;
  let fixture: ComponentFixture<ExistingTodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingTodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
