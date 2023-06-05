import React from 'react';
import './App.css';
import MyForm from './components/Formulario';
import Listado from './components/Listado';

const App = () => {
  const [citas, setCitas] = React.useState([])
  console.log("cita", citas)

  return (
    <div className="App">
      <header className="App-header">
        <h2>ADMINISTRADOR DE PACIENTES</h2>
        <div className="container flex">
          <div className="row">
            <MyForm citas={citas} setCitas={setCitas}></MyForm>

            <div className="one-half column">
              <h2>Administra tus citas</h2>
              <Listado citas={citas} setCitas={setCitas} />

            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
