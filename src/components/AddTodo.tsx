import { useState } from "react";
import { AddProps } from "../interface";
import { newTask, Task } from "../interface/task";
import { Todo } from "../model/todo";
import { Modal } from "./Modal";

export const AddTodo = ({ visible, onClose = () => { }, onSave }: AddProps) => {
    const [form, setForm] = useState<Task>(newTask)

    const handleTask = ({ target }: any) => {
        setForm({
            ...form,
            task: target.value
        });
    }

    const handleDate = ({ target }: any) => {
        setForm({
            ...form,
            date: target.value
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const todo = Todo.newTodo(form);
        setForm(newTask);
        onSave(todo);
    }

    return <Modal title="New Todo" visible={visible} onClose={onClose}>
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="todo">Todo</label>
                <input value={form.task} onChange={handleTask} className="form-input" id="todo" type="text" placeholder="todo" />
            </div>
            <div className="form-field">
                <label htmlFor="date">Date</label>
                <input value={form.date} onChange={handleDate} className="form-input" id="date" type="date" />
            </div>
            <div className="footer">
                <button type="submit" className="btn-primary">Add Todo</button>
            </div>
        </form>
    </Modal>
}