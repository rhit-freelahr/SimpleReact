import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const STARTING_TODOS = [
  { id: 1, description: 'Eat Breakfast', completed: true },
  { id: 2, description: 'Deploy to Heroku', completed: false },
  { id: 3, description: 'Check Email', completed: true },
  { id: 4, description: 'Eat Lunch', completed: false }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App todos={STARTING_TODOS}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
