import React from 'react';
import { Link } from 'react-router-dom'; // Agrega esta línea
import NavBar from '../components/nav_bar';
import Footer from '../components/footer';
import '../stylesheets/page/welcome.css';

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      
      <div className='welcome-message'>
        <h1>Bienvenidos a la Feria de Software</h1>
        <p>¡Explora las últimas innovaciones y descubre emocionantes proyectos!</p>
      </div>
      <div className='centered-image'>
          <img src='/feria.png' alt='feriaSW' />
      </div>

      <div className='sponsors-list'>
        <h2>Sponsors</h2>
        
        <div>
          <img className='sponsor-logo' src='/scotia.jpg' alt='Scotia' />
          <p>Scotia</p>
        </div>
        <div>
          <img className='sponsor-logo' src='/ntt.jpg' alt='NTT Data' />
          <p>NTT Data</p>
        </div>
        <div>
          <img className='sponsor-logo' src='/hr.png' alt='HaciendoRadio' />
          <p>HaciendoRadio</p>
        </div>
      </div>

      <div className='columns-container'>
        <div className='column'>
          <p>¡Vota aquí por tu proyecto favorito!</p>
          <Link to="/proyectos">
            <button className='vote-button'>Votar</button>
          </Link>
        </div>
        
        <div className='column'>
          <p>No te pierdas las transmisiones en vivo que tenemos para ti.</p>
          <Link to="/transmision">
            <button className='watch-live-button'>Ver en vivo</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
