function App() {
  return (
    <div>
      <main className='main-container'>
        <h1 className='title'>My Day</h1>
        <section className='task-container'>
          <h4 className='title todo'>TODO</h4>
          <div className='header'>
            <button className='add-btn'>+</button>
          </div>
          <ul className="list">
            <li className="row">
              <input id="task1" type="checkbox" />
              <label htmlFor="task1" className="task">Eat today by five</label>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
