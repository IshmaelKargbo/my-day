import { Task } from "../interface/task";

interface Prop {
    task: Task
}

export const TaskRow = ({ task }: Prop) => {
    const handleState = ({ target }: any) => { }

    return <div className="row">
        <div className="state-task">
            <input id="task1" checked={task.state} onChange={handleState} type="checkbox" />
            <label htmlFor="task1" className="task">{task.task}</label>
        </div>
        <p className="date">{task.date}</p>
    </div>
}