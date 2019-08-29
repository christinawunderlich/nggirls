import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @ViewChild('inputElementRef', {static: false}) inputReference: ElementRef;

  text = '';

  constructor(private todoListService: TodoListService) {}

  addItem(text: any) {
    const newTodoItem = { title: text };
    this.todoListService.addItem(newTodoItem);
    this.inputReference.nativeElement.value = '';
  }

  ngOnInit() {}
}
