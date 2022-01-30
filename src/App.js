// import logo from './logo.svg';
import './App.css';
import Lib from './Lib';

// import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let title = `Mini Library from Eduwork`;
  return (
    <div style={{ marginLeft: 20 }}>
      <p style={{ fontSize: 40 }}>{title}</p>
      <Lib></Lib>
    </div>
  );
}

function Hitung(param1, param2, callback) {
  let result = param1 + param2;
  if (typeof callback === 'function') {
    result = callback(param1, param2);
  }
  return result;
}

// let a = Callback(1, 2);
// console.log(a);

let b = Hitung(1, 2, function (x, y) {
  return x * y;
});
console.log(b);

export { App, Hitung };
