import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Output() itemCreated = new EventEmitter();

  item:List = {
    id: '',
    title: '',
    description: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  addItemToList(){
    const item: List = {
      id: '0',
      title: this.item.title,
      description: this.item.description
    }
    this.itemCreated.emit(item);
  }
}
