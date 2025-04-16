// App.js serves as the app’s main structure, bringing together TaskForm and TaskList

// Step 3: Building the Main Layout in src/App.js
// Set up the main layout for the app, including a title.
// Import and render the TaskForm and TaskList components to organize the app structure.

import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">To-Do List</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
