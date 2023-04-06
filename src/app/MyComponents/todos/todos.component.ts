import { Component } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = []; // This is an array of Todo objects
  constructor() {
    this.todos.push(new Todo(1, "Learn Angular", "Learn Angular from scratch", true));
    this.todos.push(new Todo(2, "Learn React", "Learn React from scratch", false));
    this.todos.push(new Todo(3, "Learn Vue", "Learn Vue from scratch", true));
  }

  todoDelete(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
