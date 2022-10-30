import { useState } from "react";
import { NewTodo } from "./components/NewTodo";

function App() {
  const [todo, setTodo] = useState(false);

  const newTodoFN = () => {
    setTodo(true);
  }

  const closeTodoFN = () => {
    setTodo(false);
  }

  return (
    <div className="app">
      <main className='main-container'>
        <h1 className='title'>My Day</h1>
        <section className='task-container'>
          <h4 className='title todo'>TODO</h4>
          <div className='header'>
            <button onClick={newTodoFN} className='add-btn'>+</button>
          </div>
          <ul className="list">
            <li className="row">
              <input id="task1" type="checkbox" />
              <label htmlFor="task1" className="task">Work on my day by 2</label>
            </li>
            <li className="row">
              <input id="task1" type="checkbox" />
              <label htmlFor="task1" className="task">Eat some food by 7</label>
            </li>
            <li className="row">
              <input id="task1" type="checkbox" />
              <label htmlFor="task1" className="task">Go for walk by 6</label>
            </li>
          </ul>
        </section>
        <section className='task-container'>
          <h4 className='title place'>PLACE TO GO</h4>
          <div className='header'>
            <button className='add-btn'>+</button>
          </div>
          <ul className="list">
            <li className="row">
              <input id="task1" type="checkbox" />
              <label htmlFor="task1" className="task">Be a the college by 5</label>
            </li>
            <li className="row">
              <input id="task1" type="checkbox" />
              <label htmlFor="task1" className="task">Be a studio by 2</label>
            </li>
            <li className="row">
              <input id="task1" type="checkbox" />
              <label htmlFor="task1" className="task">Be at the home by 3</label>
            </li>
          </ul>
        </section>
        <section className='task-container'>
          <h4 className='title people'>PEOPLE TO SEE</h4>
          <div className='header'>
            <button className='add-btn'>+</button>
          </div>
          <ul className="list">
            <li className="row">
              <input id="task1" type="checkbox" />
              <label htmlFor="task1" className="task">See Bank Manager by 4</label>
            </li>
            <li className="row">
              <input id="task1" type="checkbox" />
              <label htmlFor="task1" className="task">See Boss by 5</label>
            </li>
            <li className="row">
              <input id="task1" type="checkbox" />
              <label htmlFor="task1" className="task">See Hannah by 2</label>
            </li>
          </ul>
        </section>
      </main>
      <NewTodo visible={todo} onClose={closeTodoFN} />
    </div>
  );
}

export default App;
