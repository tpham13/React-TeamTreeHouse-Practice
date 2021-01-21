import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  App  from './App';

import reportWebVitals from './reportWebVitals';

const players = [
  {
    name: "Thanh",
    score: 50
  },
  {
    name: "Ngan",
    score: 40
  },
  
  {
    name: "Chris",
    score: 30
  },
  
  {
    name: "Oliver",
    score: 20
  }
  
];
ReactDOM.render(
  
  <React.StrictMode>
    <App initialPlayers={players} />
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
