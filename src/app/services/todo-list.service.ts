import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: any[];

  constructor() {
    this.todoList = [
      { title: 'App bauen' },
      { title: 'Sport machen' },
      { title: 'Einkaufen gehen' }
    ];
  }

  getTodoList() {
    return this.todoList;
  }

  addItem(item: any) {
    this.todoList.push(item);
  }

  removeItem(item: any) {
    const elementToRemove = this.todoList.find(todoItem => {
      return todoItem.title === item.title;
    });
    this.todoList.splice(this.todoList.indexOf(elementToRemove), 1);
  }
}
