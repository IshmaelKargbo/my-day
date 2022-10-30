export const Modal = ({ children, title = "", visible = false, onClose = () => { } }: any) => {
    return <>
        {
            visible ? <div className="modal">
                <div className="container">
                    <div className="header">
                        <p>{title}</p>
                        <button onClick={onClose} className="close-btn">X</button>
                    </div>
                    <div className="body">
                        {children}
                    </div>
                </div>
            </div> : null
        }
    </>
}