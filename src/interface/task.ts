export const uid = () => `md${Math.random().toString(16).substring(2, 8)}`;

export const today = () => {
    const dates = new Date().toLocaleDateString().split("/");
    return dates.reverse().join("-");
}

export interface Task {
    id: string
    task: string
    date: string
    priority: string
    state: boolean
}

export const newTask: Task = {
    id: "",
    task: "",
    date: today(),
    state: false,
    priority: "Low"
}
