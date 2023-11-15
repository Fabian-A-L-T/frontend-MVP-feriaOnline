import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-img-container'>
                <h2>Organiza</h2>
                <img src={"/usm-inf.png"} alt='logo departamento de informatica' />
            </div>
            <div className='contact-footer-container'>
                <h2>Contacto</h2>
                <h3>Campus Casa Central Valparaíso</h3>
                <p> <FontAwesomeIcon icon={faLocationDot}/>  Av.España 1680, Valparaíso</p>
                <p> <FontAwesomeIcon icon={faPhone}/> +56 (32) 2654242 </p><br/>
                <h3>Campus Santiago San Joaquín</h3>
                <p> <FontAwesomeIcon icon={faLocationDot}/>  Av. Vicuña Mackenna 3939, Santiago</p>
                <p> <FontAwesomeIcon icon={faPhone}/> +56 (2) 2303 7200</p><br/>
                <p><FontAwesomeIcon icon={faEnvelope}/> feria@inf.utfsm.cl</p>

            </div>
            <div className='social-footer-container'>
                <h2>Redes Sociales</h2>
                <a href='https://www.facebook.com/feriadesoftwareutfsm/'><FontAwesomeIcon icon={faFacebook}/></a>
                <a href='https://www.instagram.com/informaticausm/'><FontAwesomeIcon icon={faInstagram}/></a>
            </div>
        </footer>
    )
}

export default Footer