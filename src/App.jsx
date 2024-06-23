import { useState } from 'react';
import AddTodos from './Components/AddTodos';
import ToDo from './Components/ToDo';
import './assets/style.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <AddTodos />
      <ToDo />
    </div>
  )
}

export default App
