import { Component } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem: any;
  todos: Todo[] = []; // This is an array of Todo objects
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  todoDelete(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
