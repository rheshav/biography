import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Hitung } from './App';
import reportWebVitals from './reportWebVitals';
import Render from './Callback';

ReactDOM.render(
  <React.StrictMode>
    <Render />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
