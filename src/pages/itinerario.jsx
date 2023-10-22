import React from 'react';
import NavBar from '../components/nav_bar';
import '../stylesheets/ItinerarioPage.css'; // Importa el archivo SCSS

const ItinerarioPage = () => {
  const itinerario = [
    { tipo: 'Charla', hora: '08:00 AM', link: 'https://ejemplo.com/Charla' , color: 'yellow'},
    { tipo: 'Taller', hora: '10:00 AM', link: 'https://ejemplo.com/Taller' , color: 'red'},
    { tipo: 'Livestream', hora: '01:00 PM', link: 'https://ejemplo.com/Live' , color: "lightblue"},
    // Agrega más elementos según sea necesario
  ];

  // Función para generar la tabla JSX
  const generarTabla = () => {
    return (
      <table className="centered-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Hora</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {itinerario.map((item, index) => (
            
            <tr key={index} style={{ backgroundColor: item.color }}>
              <td>{item.tipo}</td>
              <td>{item.hora}</td>
              <td>
                <a href={item.link}>{item.link}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className='page'>
      <NavBar />
      <h1 className='page__title'>Itinerario</h1>
      {generarTabla()}
    </div>
  );
};

export default ItinerarioPage;
