import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo : EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }


  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

  onToggle(todo) {
    // Toggle in UI
    this.todo.completed = !this.todo.completed;
    //Toggle in Server
    this.todoService.toggleComplete(todo).subscribe(todo => {
      console.log(todo);

    })
  }

}
