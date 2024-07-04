
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';


const App = () => {
  const [todos, setTodos] = useState("");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Ana Sayfa</Link>
          {' | '}
          <Link to="/settings">Settings</Link>

        </nav>
        <Routes>
          <Route path="/" element={<Home todos={todos} addTodo={addTodo} />} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
