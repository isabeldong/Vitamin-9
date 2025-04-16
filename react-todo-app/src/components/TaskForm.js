// Step 4: Creating the TaskForm Component in src/components/TaskForm.js
// Create an input form for adding new tasks.
// Use useState to manage the input field’s content. (useState: manages the input box)
// Dispatch an action to the Redux store when a new task is submitted. (useDispatch: hooks into Redux to send the addTask action)

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';

function TaskForm() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    dispatch(addTask(task));
    setTask(''); // Clear input after adding
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
