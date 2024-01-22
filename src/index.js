// index.js or index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Ensure this line imports your CSS file
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
