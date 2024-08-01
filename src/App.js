import React, { useState } from 'react';
import TodoList from './components/TodoList';
import { fetchTodos } from './utils/api';

function App() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const data = await fetchTodos();
    setTodos(data);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <button onClick={loadTodos}>Load Todos</button>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
