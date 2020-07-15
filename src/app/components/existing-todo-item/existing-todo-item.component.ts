import { Component, OnInit, Input } from '@angular/core';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-existing-todo-item',
  templateUrl: './existing-todo-item.component.html',
  styleUrls: ['./existing-todo-item.component.scss'],
})
export class ExistingTodoItemComponent implements OnInit {
  @Input() item: List;

  _isEditClicked = false;

  constructor() {}

  ngOnInit(): void {}

  editItem() {
    console.log('Edit Item clicked');
    console.log('id', this.item.id);
    this._isEditClicked = true;
  }

  get isEditClicked() {
    return this._isEditClicked;
  }

  deleteItem() {
    console.log('Delete Item clicked');
    console.log('id', this.item.id);
  }
}
