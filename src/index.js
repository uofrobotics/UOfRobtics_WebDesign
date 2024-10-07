import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for the latest React version
import App from './App';


// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


