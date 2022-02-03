import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { App, Hitung } from './App';
import reportWebVitals from './reportWebVitals';
// import Render from './Callback';
import Promises from './Promise';

ReactDOM.render(<React.StrictMode></React.StrictMode>, document.getElementById('root'));
const promise = new Promise(function (resolve, reject) {
  if (false) {
    resolve('Promise Berhasil');
  } else {
    reject('Promise Gagal');
  }
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch((error) => console.log(error));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
