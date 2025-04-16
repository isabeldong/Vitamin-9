// Step 5: Creating the TaskList Component in src/components/TaskList.js
// Display the list of tasks from the Redux store.
// Add a delete button for each task that dispatches an action to remove the specific task.
// Use useSelector to access the tasks in the Redux store, and useDispatch to send delete actions. (useSelector: grabs the task list from the Redux store) (useDispatch: sends a deleteTask action with the task’s index)

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {task}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
