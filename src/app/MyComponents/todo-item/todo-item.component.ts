import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  todo!: Todo;

  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  onDelete(todo: Todo){
    this.deleteTodo.emit(todo);
    console.log("Delete");
  }

  onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
  }
}

