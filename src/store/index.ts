import { Task, uid } from "../interface/task";
import { Todo } from "../model/todo";

export class Store {

    private store = localStorage;

    static open() {
        return new Store();
    }

    data() {
        const lists: Array<Todo> = [];
        const keys = Object.keys(localStorage);

        keys.forEach(key => {
            const todo = this.fromStore(key);
            if (todo) lists.push(todo);
        });

        const high = lists.filter(todo => todo.priority === "High").reverse();
        const medium = lists.filter(todo => todo.priority === "Medium").reverse();
        const low = lists.filter(todo => todo.priority === "Low").reverse();

        return { high, medium, low };
    }

    add(task: Task) {
        const key = uid();
        const todo = Todo.newTodo(task);
        todo.setId = key;
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

    private fromStore(key: string) {
        const task = this.store.getItem(key);
        if (task) return Todo.fromString(task);
        return null;
    }
}