import 'bootstrap/dist/css/bootstrap.min.css';

const table = document.getElementById('data');
table.innerHTML = load();

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((res) => {
    table.innerHTML = Render(res);
  });

function Render(result) {
  let table = '';
  result.forEach((data) => {
    table += `<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.username}</td>
                <td>${data.email}</td>
                <td>
                  ${data.address.street},
                  ${data.address.suite}, 
                  ${data.address.city}
                 </td>
                <td>${data.company.name}</td>
              </tr>`;
  });
  return table;
}

export default Render;
