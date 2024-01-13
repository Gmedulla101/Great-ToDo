import React from 'react';
import ReactDOM from 'react-dom/client';

//IMPORTING MAIN APP COMPONENT
import App from './App.js';

//IMPORTING STYLING
import './CSS/style.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
