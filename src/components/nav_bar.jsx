import React from 'react'
import { NavLink } from 'react-router-dom'
import FESW_Logo from '../assets/fesw-logo.png'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink
        className='nav-bar__logo'
        to='/'
      >
        <img src={FESW_Logo} alt='logo usm' /><br />
      </NavLink>
      
        <NavLink
          className={({ isActive }) => `nav-bar__right-links ${isActive ? 'nav-bar__right-links--active' : ''}`}
          to='/proyectos'
        >
          <p>Proyectos</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-bar__right-links ${isActive ? 'nav-bar__right-links--active' : ''}`}
          to='/mensajes'
        >
          <p>Mensajes</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-bar__right-links ${isActive ? 'nav-bar__right-links--active' : ''}`}
          to='/itinerario'
        >
          <p>Itinerario</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => `nav-bar__right-links ${isActive ? 'nav-bar__right-links--active' : ''}`}
          to='/transmision'
        >
          <p>Transmision</p>
        </NavLink>
      
    </nav>
  )
}

export default NavBar
