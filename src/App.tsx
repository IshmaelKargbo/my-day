import { Todos } from "./components/Todos";

function App() {

  return (
    <div className="app">
      <main className='main-container'>
        <h1 className='title'>My Day</h1>
        <Todos />
      </main>
    </div>
  );
}

export default App;
