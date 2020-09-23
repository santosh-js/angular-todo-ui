import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
})
export class ListTodoComponent implements OnInit {
  todos = [
    new Todo(1, 'One', 'This is One description', true, new Date()),
    new Todo(2, 'Two', 'This is Two description', false, new Date()),
    new Todo(3, 'Three', 'This is Three description', false, new Date()),
    new Todo(4, 'Four', 'This is Four description', false, new Date()),
    new Todo(5, 'Five', 'This is Five description', false, new Date()),
    new Todo(6, 'Six', 'This is Six description', false, new Date()),
  ];
  constructor() {}

  ngOnInit(): void {}
}
