// Step 2: Setting Up the Redux Store in src/store.js
// Define the initial state of your app with an empty list of tasks.
// Set up a reducer function to handle actions for adding and deleting tasks.
// Create a Redux store using this reducer, then export the store to use in other parts of the app.

import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice with reducers for adding and deleting tasks
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.splice(action.payload, 1); // Remove task by index
    },
  },
});

// Export actions for use in components
export const { addTask, deleteTask } = tasksSlice.actions;

// Create and export the store
const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export default store;
