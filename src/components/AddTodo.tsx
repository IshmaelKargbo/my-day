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

    const handleRadio = ({ target }: any) => {
        setForm({
            ...form,
            priority: target.value
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
                <label>Priority</label>
                <div className="priority">
                    <div className="radio">
                        <input value="Low" checked={form.priority === "Low"} onChange={handleRadio} id="low" name="priority" type="radio" />
                        <label htmlFor="low">Low</label>
                    </div>
                    <div className="radio">
                        <input value="Medium" checked={form.priority === "Medium"} onChange={handleRadio} id="meduim" name="priority" type="radio" />
                        <label htmlFor="meduim">Medium</label>
                    </div>
                    <div className="radio">
                        <input value="High" checked={form.priority === "High"} onChange={handleRadio} id="high" name="priority" type="radio" />
                        <label htmlFor="high">High</label>
                    </div>
                </div>
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