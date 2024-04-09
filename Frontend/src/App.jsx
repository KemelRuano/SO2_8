
import React, { useState } from 'react';
import { Dash } from "./Pages/dashboard";
import { Solicitud } from "./Pages/Solicitud";
import "./Diseño/App.css";

function App() {
  const [mostrarDash, setmostrarDash] = useState(false);
  const [mostrarSol, setmostrarSol] = useState(false);

  const Dashboard = ()=> {
    setmostrarSol(false);
    setmostrarDash(!mostrarDash);
  };
  const Solicitudes = ()=> {
    setmostrarDash(false);
    setmostrarSol(!mostrarSol);
  };

  return (
    <div>
      <h1>SO2 Proyecto 1</h1>
      <div className="container">
        <div className="button-container">
          <button onClick={Dashboard}>Dashboard</button>
          <button onClick={Solicitudes}>Solicitudes</button>
        </div>
        {mostrarDash && (
            <div className="content">
              <Dash />
            </div>
         )}
         {mostrarSol && (
            <div className="content">
              <Solicitud />
            </div>
         )}
      </div>
    </div>
  );
}

export default App;
