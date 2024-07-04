import React, { useState } from 'react';


const TodoItem = ({ todo, deleteTodo, editTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          className={todo.completed ? 'completed' : ''}
          onClick={handleToggleComplete}
        >
          {todo.text}
        </span>
      )}
      <div>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
