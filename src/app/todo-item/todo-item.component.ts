import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item;
  // @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor(private todoListService: TodoListService) { }

  removeItem() {
    this.todoListService.removeItem(this.item);
  }

  ngOnInit() {
  }

}
