import { Task, today } from "../interface/task";

export class Todo {
    private _task: string = "";
    private _date: string = today();
    private _state: boolean = false;

    static newTodo(task: Task): Todo {
        const todo = new Todo();        

        todo.setState = task.state;
        todo.setTask = task.task;
        todo.setDate = task.date;

        return todo;
    }

    static initTodo(): Todo {
        return new Todo();
    }

    static fromString(data: string): Todo {
        const task: Task = JSON.parse(data);
        const todo = new Todo();

        todo.setState = task.state;
        todo.setTask = task.task;
        todo.setDate = task.date;

        return todo;
    }

    get task(): string {
        return this._task;
    }

    get date(): string {
        return this._date;
    }

    get state(): boolean {
        return this._state;
    }

    get toString(): string {
        const task = {
            task: this._task,
            date: this._date,
            state: this._state
        }

        return JSON.stringify(task);
    }

    get data(): Task {
        return {
            date: this._date,
            task: this._task,
            state: this._state
        }
    }

    set setTask(v: any) {
        this._task = v;
    }

    set setDate(v: string) {
        this._date = v;
    }

    set setState(v: boolean) {
        this._state = v;
    }
}