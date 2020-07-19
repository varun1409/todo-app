import { Component } from '@angular/core';
import { List } from './models/list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item2:List ={
    id: '1',
    title: 't12',
    description: 'd1'
  };
  title = 'todo-app';

  saveItemCreated(item){
    console.log(item);
    this.item2 = item;
  }

}
