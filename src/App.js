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

// function declaration
function deklarasi() {
  console.log('deklarasi');
}

// function expression
const expression = function () {
  console.log('expression');
};
deklarasi();
expression();
console.log(deklarasi);
console.log(expression);

// Arrow function
const arrow = () => {
  console.log(`arrow`);
};

arrow();
console.log(arrow());

//Param
function tambah(a, b) {
  alert(`${a} + ${b} = ${a + b}`);
}

tambah(10, 20);

const kali = function (a, b) {
  alert(`${a} * ${b} = ${a * b}`);
};
kali(10, 20);
*/

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

//game tebak angka
alert(`Silahkan bermain`);

let ronde = () => {
  for (let i = 1; i <= 5; i++) {
    alert('ronde ke ' + i);
    let player1 = prompt(`Player 1 Silahkan masukkan Angka antara 1-2`);
    let player2 = prompt(`Player 2 Silahkan masukkan Angka antara 1-2`);
    let acak = Math.floor(Math.random() * 2) + 1;

    console.log(acak); //untuk cek value acak
    console.log(`angka dari Player 1 = ` + player1); //cek value player 1

    //kondisi permainan
    if (player1 == acak && player1 != player2) {
      alert(`Player 1 Win`);
    } else if (player2 == acak && player1 != player2) {
      alert(`Player 2 Win`);
    } else if (player1 == player2) {
      alert(`Tebakan tidak boleh sama`);
    } else if (player1 <= 0) {
      alert(`tebakan tidak boleh kurang dari 0`);
    } else if (player2 <= 0) {
      alert(`tebakan tidak boleh kurang dari 0`);
    } else if (player1 > 2) {
      alert(`tebakan tidak boleh lebih dari 2`);
    } else if (player2 > 2) {
      alert(`tebakan tidak boleh lebih dari 2`);
    } else {
      alert(`silahkan masukkan nilai yang valid`);
    }

    alert(`Player 1 memasukkan angka  ${player1}
Player 2 memasukkan angka ${player2}
Angka yang keluar ${acak}`);
  }
};
ronde();
// alert ('Player 1 memasukkan angka' + player1);
// alert ('Player 1 memasukkan angka' + player1);

//function untuk looping permainan
// let ronde = () => {
//   for (let i = 1; i <= 5; i++) {
//     alert('ronde ke ' + i);
//   }
// };
