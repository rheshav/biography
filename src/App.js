import logo from './logo.svg';
import './App.css';

// condition sederhana
let nilai = prompt(`masukkan nilai `);

if (nilai >= 90 && nilai <= 100) {
  alert(`lulus predikat sangat baik`);
} else if (nilai >= 80 && nilai < 90) {
  alert(`lulus predikat baik`);
} else if (nilai >= 70 && nilai < 80) {
  alert(`lulus predikat cukup`);
} else if (nilai < 70 && nilai >= 0) {
  alert(`maaf nilai Anda belum memenuhi KKM`);
} else {
  alert(`nilai tidak valid, silahkan masukkan nilai antara 1-100`);
}

// end of condition sederhana

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
