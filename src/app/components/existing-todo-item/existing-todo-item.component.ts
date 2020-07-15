import { Component, OnInit, Input } from '@angular/core';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-existing-todo-item',
  templateUrl: './existing-todo-item.component.html',
  styleUrls: ['./existing-todo-item.component.scss'],
})
export class ExistingTodoItemComponent implements OnInit {
  @Input() item: List;
  constructor() {}

  ngOnInit(): void {}
}
