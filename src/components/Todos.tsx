import { useEffect, useState } from "react";
import { Task } from "../interface/task";
import { Todo } from "../model/todo";
import { Store } from "../store";
import { AddTodo } from "./AddTodo";
import { TaskRow } from "./Task";
import { TfiPlus } from "react-icons/tfi";
import { MdHistory, MdOutlineFreeCancellation } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

export const Todos = () => {
    const [visible, setVisible] = useState(false);
    const [history, setHistory] = useState(false);
    const store = Store.open();

    const [highs, setHighs] = useState<Array<Todo>>([]);
    const [mediums, setMediums] = useState<Array<Todo>>([]);
    const [lows, setLows] = useState<Array<Todo>>([]);

    useEffect(() => {
        fetchTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        fetchTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history]);

    const add = () => {
        setVisible(true);
    };

    const onUpdate = (todo: Todo) => {
        store.update(todo.toTask);
        fetchTodos();
    };

    const fetchTodos = () => {
        const { high, low, medium } = store.data(history);

        setHighs(high);
        setLows(low);
        setMediums(medium);
    };

    const onClose = () => {
        setVisible(false);
    };

    const todoSave = (task: Task) => {
        setVisible(false);
        store.add(task);
        fetchTodos();
    };

    const cleanHistory = () => {
        store.cleanHistory();
        fetchTodos();
    };

    const showHistory = () => {
        setHistory(true);
    };

    const hideHistory = () => {
        setHistory(false);
    };

    return (
        <>
            <section className="task-container">
                <h4 className="title high">HIGH</h4>
                <ul className="list">
                    {highs.map((task, key) => (
                        <li key={key}>
                            <TaskRow onUpdate={onUpdate} todo={task} />
                        </li>
                    ))}
                </ul>
                {highs.length === 0 ? <p className="empty">No Todo</p> : null}
            </section>
            <section className="task-container">
                <h4 className="title medium">MEDIUM</h4>
                <ul className="list">
                    {mediums.map((task, key) => (
                        <li key={key}>
                            <TaskRow onUpdate={onUpdate} todo={task} />
                        </li>
                    ))}
                </ul>
                {mediums.length === 0 ? <p className="empty">No Todo</p> : null}
            </section>
            <section className="task-container">
                <h4 className="title low">LOW</h4>
                <ul className="list">
                    {lows.map((task, key) => (
                        <li key={key}>
                            <TaskRow onUpdate={onUpdate} todo={task} />
                        </li>
                    ))}
                </ul>
                {lows.length === 0 ? <p className="empty">No Todo</p> : null}
            </section>
            <div className="bottom-btn">
                <div className="row">
                    {history ? (
                        <button className="add-btn" onClick={hideHistory}>
                            <MdOutlineFreeCancellation />
                        </button>
                    ) : (
                        <button className="add-btn" onClick={showHistory}>
                            <BsClockHistory />
                        </button>
                    )}
                    <button className="add-btn" onClick={cleanHistory}>
                        <MdHistory />
                    </button>
                    <button className="add-btn" onClick={add}>
                        <TfiPlus />
                    </button>
                </div>
            </div>
            <AddTodo onSave={todoSave} visible={visible} onClose={onClose} />
        </>
    );
};
