import React,{useState} from 'react';

import "../Diseño/tabla.css"
export const Solicitud = () => {
    
    const [datos, setDatos] = useState([
        { id: 1, nombre: 'Ejemplo 1', descripcion: 'Descripción 1' },
        { id: 2, nombre: 'Ejemplo 2', descripcion: 'Descripción 2' },
        { id: 3, nombre: 'Ejemplo 3', descripcion: 'Descripción 3' }
        ]);
  
    return (
        <div className="tabla-container">
            <table className="tabla">
                <thead>
                <tr>
                    <th>PID</th>
                    <th>Llamada</th>
                    <th>Tamaño</th>
                    <th>Fecha</th>
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
    );
};