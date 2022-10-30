import { Modal } from "./Modal"

export const NewTodo = ({visible, onClose = () => {}}: any) => {
    return <Modal title="New Todo" visible={visible} onClose={onClose}>
        <form className="">
            <div className="form-field">
                <label htmlFor="todo">Todo</label>
                <input className="form-input" id="todo" type="text" placeholder="todo" />
            </div>
            <div className="form-field">
                <label htmlFor="date">Date</label>
                <input className="form-input" id="date" type="date" />
            </div>
            <div className="footer">
                <button className="btn-primary">Add Todo</button>
            </div>
        </form>
    </Modal>
}