import React, { useState, useEffect } from 'react';
import NavBar from '../components/nav_bar';
import '../stylesheets/ItinerarioPage.css';

const ItinerarioPage = () => {
  const itinerarioOriginal = [
    { tipo: 'Charla medioambiente', hora: '08:00 AM', link: 'https://zoomo.com/CHarL4M34Mb13' , color: 'yellow'},
    { tipo: 'Taller robótica', hora: '10:00 AM', link: 'https://zoomo.com/T41135R0bo7' , color: 'red'},
    { tipo: 'Livestream tidesense', hora: '01:00 PM', link: 'https://zoomo.com/LiveT1d3' , color: "lightblue"},
    { tipo: 'Livestream noisetrack', hora: '01:30 PM', link: 'https://zoomo.com/LiveN0153' , color: "lightblue"},
    { tipo: 'Livestream anima', hora: '02:00 PM', link: 'https://zoomo.com/Live4N1m4' , color: "lightblue"},
    { tipo: 'Charla equidad de género', hora: '02:00 PM', link: 'https://zoomo.com/Charl3q1G3n' , color: 'yellow'},
    { tipo: 'Taller arduino', hora: '02:30 PM', link: 'https://zoomo.com/R2D2' , color: 'red'},
    { tipo: 'Livestream ar-go', hora: '03:00 PM', link: 'https://zoomo.com/Live4rG0NaU7' , color: "lightblue"},
    { tipo: 'Charla Redes Neuronales aplicadas', hora: '03:30 PM', link: 'https://zoomo.com/B1B1B00P?' , color: 'yellow'},
    { tipo: 'Taller física electronica', hora: '04:00 PM', link: 'https://zoomo.com/31n57e1N07D34d' , color: 'red'},
    { tipo: 'Livestream cusinear', hora: '04:30 PM', link: 'https://zoomo.com/LiveR474tui11e' , color: "lightblue"},
    { tipo: 'Livestream safesym', hora: '05:30 PM', link: 'https://zoomo.com/LiveS4f3Sym' , color: "lightblue"},

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
