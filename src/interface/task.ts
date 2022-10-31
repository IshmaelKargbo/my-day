export const today = () => {
    const dates = new Date().toLocaleDateString().split("/");
    return dates.reverse().join("-");
}

export interface Task {
    task: string
    date: string
    state: boolean
}

export const newTask: Task = {
    task: "",
    date: today(),
    state: false
}
