import { Task, today } from "../interface/task";

export class Todo {
    private _id: string = Date.now().toString();
    private _task: string = "";
    private _date: string = today();
    private _priority: string = "";
    private _state: boolean = false;

    static newTodo(task: Task): Todo {
        const todo = new Todo();        

        todo.setId = task.id;
        todo.setState = task.state;
        todo.setTask = task.task;
        todo.setDate = task.date;
        todo.setPriority = task.priority;

        return todo;
    }

    static initTodo(): Todo {
        return new Todo();
    }

    static fromString(data: string): Todo {
        const task: Task = JSON.parse(data);
        const todo = new Todo();

        todo.setId = task.id;
        todo.setState = task.state;
        todo.setTask = task.task;
        todo.setDate = task.date;
        todo.setPriority = task.priority;

        return todo;
    }

    get id(): string {
        return this._id;
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

    get priority() : string {
        return this._priority;
    }

    get toString(): string {
        const task = {
            id: this._id,
            task: this._task,
            date: this._date,
            priority: this._priority,
            state: this._state
        }

        return JSON.stringify(task);
    }

    get data(): Task {
        return {
            id: this._id,
            date: this._date,
            task: this._task,
            state: this._state,
            priority: this._priority
        }
    }

    set setId(v: string) {
        this._id = v;
    }

    set setTask(v: string) {
        this._task = v;
    }

    set setDate(v: string) {
        this._date = v;
    }

    set setState(v: boolean) {
        this._state = v;
    }
    
    set setPriority(v : string) {
        this._priority = v;
    }
}