import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingTodoComponent } from './existing-todo.component';

describe('ExistingTodoComponent', () => {
  let component: ExistingTodoComponent;
  let fixture: ComponentFixture<ExistingTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
