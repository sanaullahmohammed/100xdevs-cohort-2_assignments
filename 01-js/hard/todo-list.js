/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  tasks;

  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks.push(task);
  }

  remove(taskIndex) {
    this.tasks.splice(taskIndex, 1);
  }

  update(index, updatedTask) {
    if (index >= this.tasks.length || index < 0) {
      return "Invalid index";
    }
    this.tasks[index] = updatedTask;
  }

  getAll() {
    return this.tasks;
  }

  get(taskIndex) {
    if (taskIndex >= this.tasks.length || taskIndex < 0) {
      return null;
    }
    return this.tasks[taskIndex];
  }

  clear() {
    this.tasks = [];
  }
}

module.exports = Todo;
