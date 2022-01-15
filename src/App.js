// import logo from './logo.svg';
import './App.css';
import Lib from './Lib';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let title = `Mini Library from Eduwork`;
  return (
    <div>
      <p>{title}</p>
      <Lib></Lib>
    </div>
  );
}

export default App;
class Orang {
  constructor() {
    console.log(`this is constructor`);
  }
  // let arrow = () => {
  //   console.log(`arrow function`);
  // }
  expression() {
    console.log(`expression function`);
  }
  static statik() {
    console.log(`ini fungsi static`);
  }
}

let person = new Orang();
// console.log(Orang().expression);
console.log(person.expression());
console.log(Orang.statik());
