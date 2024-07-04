import React, { useState, useEffect } from 'react';
import '../assets/css/App.css';
import ColorPicker from '../components/ColorPicker';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { Serebellum } from '../components/serebellum';

const App = () => {
  const [primaryColor, setPrimaryColor] = useState('#4b73ff');
  const [todos, setTodos] = useState([]);

  // JSON dosyasını fetch ile okuyup todos state'ine set ediyoruz
  useEffect(() => {
    fetch('/tasks.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      id: Math.random(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);

    
  };

  
  

  return (
    <div className="app">
      <div className="todo-container">
        <Serebellum/>
        <ColorPicker color={primaryColor} onChange={setPrimaryColor} />
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
        />
        
      </div>
    </div>
  );
};

export default App;
