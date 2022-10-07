import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  inputTodo: string = "";
  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [{
      content: "Do shopping",
      completed: false,
    },
    {
      content: "Wash dishes",
      completed: true,
    },
    {
      content: "Read a book",
      completed: true,
    }, {
      content: "Go to the gym",
      completed: false,
    }]
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = "";
  }

}
