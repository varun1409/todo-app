import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ExistingTodoComponent } from './components/existing-todo/existing-todo.component';
import { ExistingTodoItemComponent } from './components/existing-todo-item/existing-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ExistingTodoComponent,
    ExistingTodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
