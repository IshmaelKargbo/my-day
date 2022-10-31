import { useState } from "react";
import { Task } from "../interface/task";
import { AddTodo } from "./AddTodo";
import { TaskRow } from "./Task";

export const Todos = () => {
    const [visible, setVisible] = useState(false);
    const [tasks, setTasks] = useState<Array<Task>>([]);

    const add = () => {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }

    const todoSave = (task: Task) => {
        setVisible(false);
        tasks.push(task);
        setTasks(tasks);
    }

    return <>
        <section className='task-container'>
            <h4 className='title todo'>HIGH</h4>
            <ul className="list">
                {
                    tasks.map((task, key) => (
                        <li key={key}>
                            <TaskRow task={task} />
                        </li>
                    ))
                }
            </ul>
            {
                tasks.length === 0 ? <p className="empty">No Todo</p> : null
            }
        </section>
        <button className="add-btn" onClick={add}>+</button>
        <AddTodo onSave={todoSave} visible={visible} onClose={onClose} />
    </>
}