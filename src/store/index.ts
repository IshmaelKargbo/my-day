import { Task, uid } from "../interface/task";
import { Todo } from "../model/todo";

export class Store {

    private store = localStorage;

    static open() {
        return new Store();
    }

    data(history = false) {
        const lists: Array<Todo> = [];
        const keys = Object.keys(localStorage);

        keys.forEach(key => {
            const todo = this.fromStore(key);
            if (todo) {
                if (history) lists.push(todo);
                else if (!todo.state && !history) lists.push(todo);
            }
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

    cleanHistory() {
        const lists: Array<Todo> = [];
        const keys = Object.keys(localStorage);

        keys.forEach(key => {
            const todo = this.fromStore(key);
            if (todo) lists.push(todo);
        });

        const history = lists.filter(todo => todo.state);

        history.forEach(todo => {
            this.remove(todo.id);
        })
    }

    private fromStore(key: string) {
        const task = this.store.getItem(key);
        if (task) return Todo.fromString(task);
        return null;
    }
}