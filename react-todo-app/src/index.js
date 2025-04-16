// index.js initializes the app with Bootstrap styling and the Redux store

// Step 1: Setting Up Bootstrap in src/index.js
// Import the Bootstrap CSS at the top to make its styles available throughout your project.
// Wrap the <App /> component with <Provider store={store}>, which makes the Redux store accessible to the app.
// Import Provider from react-redux and store from store.js.

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import Redux store
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
