import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

let kelereng = `merah`; //global scope
let outerfunction = () => {
  let kelereng = `kuning`;
  // return () => {
  //   console.log(kelereng);
  // };

  // let innerfunction = () => {
  //   console.log(kelereng);
  // };
  // return innerfunction();
  // innerfunction();
  return function innerfunction() {
    console.log(kelereng);
  };
};
// innerfunction();
// outerfunction();
console.dir(outerfunction());
