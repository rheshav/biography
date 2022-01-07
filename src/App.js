import logo from './logo.svg';
import './App.css';

/* control flow
// task condition sederhana
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
*/

// function declaration
// function deklarasi() {
//   console.log('deklarasi');
// }

// function expression
// const expression = function () {
//   console.log('expression');
// };
// deklarasi();
// expression();
// console.log(deklarasi);
// console.log(expression);

// Arrow function
// const arrow = () => {
//   console.log(`arrow`);
// };

// arrow();
// console.log(arrow());

//Param
// function tambah(a, b) {
//   alert(`${a} + ${b} = ${a + b}`);
// }

// tambah(10, 20);

// const kali = function (a, b) {
//   alert(`${a} * ${b} = ${a * b}`);
// };
// kali(10, 20);

// task membuat game sederhana
const intro = () => {
  alert`Selamat datang di game tebak angka
Silahkan Menebak antara 1-3
Pemain yang menebak angka dengan benar dalam 5 ronde akan menang`;
};
intro();

let random = Math.floor(Math.random() * 2) + 1;

let player1 = prompt`Player 1
Silahkan masukkan angka 1-3`;

// let player2 = prompt`Player 2
// Silahkan masukkan angka 1-3`;
console.log(random);

// if (player1 === player2) {
//   alert`nilai keduanya tidak boleh sama`;
// } else
if (player1 == random) {
  alert`Player 1 win`;
  // } else if (player2 === random()) {
  //   alert`Player 2 win`;
} else {
  alert`def`;
}
// console.log(random());
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
