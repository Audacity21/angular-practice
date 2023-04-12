import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  index: any;
  @Input() public title: any;
  @Input() public desc: any;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter(); 

  constructor() { 
    this.index = localStorage.getItem('slno');
    if(this.index == null){
      this.index = 0;
    }
  }

  onSubmit() {
    const todo = {
      sno: this.index,
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.index++;
    localStorage.setItem('slno', this.index);
    this.todoAdd.emit(todo);
  }
}
