import React, { useState } from 'react';
import ToDo from './ToDo';

const TodoList = () => {
  const [taskInput, setTaskInput] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, task: 'Complete assignment 1' },
    { id: 2, task: 'Finish reading' },
    { id: 3, task: 'Buy groceries' },
  ]);

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, task: taskInput }]);
      setTaskInput('');
    }
  };

  const handleRemoveTask = (taskId) => {
    setTodos(todos.filter(todo => todo.id !== taskId));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add Task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {todos.map(todo => (
        <ToDo key={todo.id} task={todo.task} onRemove={() => handleRemoveTask(todo.id)} />
      ))}
    </div>
  );
};

export default TodoList;
