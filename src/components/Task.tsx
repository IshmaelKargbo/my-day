import { Todo } from "../model/todo";

interface Prop {
    todo: Todo
    onUpdate: Function
}

export const TaskRow = ({ todo, onUpdate }: Prop) => {

    const handleClick = ({ target }: any) => {
        const state = target.checked;
        todo.setState = state;
        onUpdate(todo);
    };

    return <div className="row">
        <input id={todo.id} checked={todo.state} onChange={handleClick} type="checkbox" className="state" />
        <label htmlFor={todo.id} className="task">{todo.task} on <span className="date">{todo.date}</span></label>
    </div>
}