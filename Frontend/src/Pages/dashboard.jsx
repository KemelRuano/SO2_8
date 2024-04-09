import React,{useState} from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut  } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
import '../Diseño/tabla.css';

export const Dash = () => {
    // Datos para la gráfica de pastel
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 3,
        },
      ],
    };

    const opciones = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            position: 'bottom',
            },
            title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
            }
        }
        };

        const [datos, setDatos] = useState([
            { id: 1, nombre: 'Ejemplo 1', descripcion: 'Descripción 1' },
            { id: 2, nombre: 'Ejemplo 2', descripcion: 'Descripción 2' },
            { id: 3, nombre: 'Ejemplo 3', descripcion: 'Descripción 3' }
          ]);

    return (
        <div style ={{display: 'flex' }}>
            <div style={{ width: '500px', height: '500px' }}>
                <Doughnut data={data}  options={opciones} />
            </div>
            <div className="tabla-container">
                <table className="tabla">
                    <thead>
                    <tr>
                        <th>PID</th>
                        <th>Nombre</th>
                        <th colSpan="2">Memoria</th>
                    </tr>
                    </thead>
                    <tbody>
                    {datos.map((dato) => (
                        <tr key={dato.id}>
                        <td>{dato.id}</td>
                        <td>{dato.nombre}</td>
                        <td>{dato.descripcion}</td>
                        <td>{dato.descripcion}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
  };
