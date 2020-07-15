import { Component, OnInit } from '@angular/core';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-existing-todo',
  templateUrl: './existing-todo.component.html',
  styleUrls: ['./existing-todo.component.scss'],
})
export class ExistingTodoComponent implements OnInit {
  list: List[];
  constructor() {}

  ngOnInit(): void {
    this.list = [];
    let l1: List = {
      id: '1',
      title: 'Title 1',
      description: 'Desc 1',
    };
    this.list.push(l1);

    let l2: List = {
      id: '2',
      title: 'Title 2',
      description: 'Desc 2',
    };
    this.list.push(l2);
  }
}
