import { Task } from "../interface/task";
import { Todo } from "../model/todo";

export class Store {

    private store = localStorage;

    static open() {
        return new Store();
    }

    add(task: Task) {
        const key = task.id;
        const todo = Todo.newTodo(task);
        this.store.setItem(key, todo.toString);
    }

    remove(key: string) {
        this.store.removeItem(key);
    }

    update(task: Task) {
        const key = task.id;
        const todo = Todo.newTodo(task);
        this.store.setItem(key, todo.toString);
    }
}