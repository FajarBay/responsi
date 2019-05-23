import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
    <div className="container">
    <h1>Perkiraan Cuaca Yogyakarta</h1>
              <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Datetime</th>
              <th scope="col">Temp</th>
              <th scope="col">Temp Min</th>
              <th scope="col">Temp Max</th>
              <th scope="col">Weather</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
  );
  }
}

export default App;
