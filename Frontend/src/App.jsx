
import React, { useState } from 'react';
import { Dash } from "./Pages/dashboard";
import { Solicitud } from "./Pages/Solicitud";
import "./Diseño/App.css";

function App() {
  const [mostrarDash, setmostrarDash] = useState(false);
  const [mostrarSol, setmostrarSol] = useState(false);

  const [global, setglobal] = useState({});
  const [ListS, SetListS] = useState([]);


  const Dashboard = ()=> {
    setmostrarSol(false);
    setmostrarDash(!mostrarDash);

    fetch("http://localhost:3000/dashboard",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setglobal(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    
  };


  const Solicitudes = ()=> {
    setmostrarDash(false);
    setmostrarSol(!mostrarSol);

    fetch("http://localhost:3000/solicitud",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      SetListS(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    console.log(ListS);
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
              <Dash ListParms={global} />
            </div>
         )}
         {mostrarSol && (
            <div className="content">
              <Solicitud TableList={ListS}/>
            </div>
         )}
      </div>
    </div>
  );
}

export default App;
