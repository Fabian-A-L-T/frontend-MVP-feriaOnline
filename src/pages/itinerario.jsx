import React, { useState, useEffect } from 'react';
import NavBar from '../components/nav_bar';
import '../stylesheets/ItinerarioPage.css';

const ItinerarioPage = () => {
  const itinerarioOriginal = [
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

  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);
  const [datosFiltrados, setDatosFiltrados] = useState([...itinerarioOriginal]);

  useEffect(() => {
    // Filtrar los datos cuando cambie el tipo seleccionado
    if (tipoSeleccionado) {
      const filtrados = itinerarioOriginal.filter(item => item.tipo === tipoSeleccionado);
      setDatosFiltrados(filtrados);
    } else {
      // Si no se ha seleccionado ningún tipo, mostrar todos los datos
      setDatosFiltrados([...itinerarioOriginal]);
    }
  }, [tipoSeleccionado]);

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
          {datosFiltrados.map((item, index) => (
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
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ flex: '10%' }}>
          <div style={{ marginLeft: '30%' }}>
          <h2>Filtrar</h2>
          <select
            id="tipoSelector"
            value={tipoSeleccionado || ''}
            onChange={(e) => setTipoSeleccionado(e.target.value || null)}
          >
            <option value="">Mostrar todos</option>
            <option value="Charla">Charla</option>
            <option value="Taller">Taller</option>
            <option value="Livestream">Livestream</option>
        </select>
        </div>
      </div>
        <div style={{ flex: '80%' }}>
      {generarTabla()}
      </div>
      <div style={{ flex: '10%' }}>
        </div>
    </div>
    </div>
  );
};

export default ItinerarioPage;
