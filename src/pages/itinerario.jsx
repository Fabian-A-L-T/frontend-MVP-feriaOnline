import React from 'react';
import NavBar from '../components/nav_bar';
import '../stylesheets/ItinerarioPage.css'; 

const ItinerarioPage = () => {
  const itinerario = [
    { tipo: 'Charla', hora: '08:00 AM', link: 'https://ejemplo.com/Charla' , color: 'yellow'},
    { tipo: 'Taller', hora: '10:00 AM', link: 'https://ejemplo.com/Taller' , color: 'red'},
    { tipo: 'Livestream', hora: '01:00 PM', link: 'https://ejemplo.com/Live' , color: "lightblue"},
    { tipo: 'Livestream', hora: '01:30 PM', link: 'https://ejemplo.com/Live' , color: "lightblue"},
    { tipo: 'Livestream', hora: '02:00 PM', link: 'https://ejemplo.com/Live' , color: "lightblue"},
    { tipo: 'Charla', hora: '02:00 PM', link: 'https://ejemplo.com/Charla' , color: 'yellow'},
    { tipo: 'Taller', hora: '02:30 PM', link: 'https://ejemplo.com/Taller' , color: 'red'},
    { tipo: 'Livestream', hora: '03:00 PM', link: 'https://ejemplo.com/Live' , color: "lightblue"},
    { tipo: 'Livestream', hora: '03:30 PM', link: 'https://ejemplo.com/Live' , color: "lightblue"},
    { tipo: 'Charla', hora: '03:30 PM', link: 'https://ejemplo.com/Charla' , color: 'yellow'},
    { tipo: 'Taller', hora: '04:00 PM', link: 'https://ejemplo.com/Taller' , color: 'red'},
    { tipo: 'Livestream', hora: '04:30 PM', link: 'https://ejemplo.com/Live' , color: "lightblue"},

  ];

  
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
