import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import ProyectosPage from '../pages/proyectos'
import ItinerarioPage from '../pages/itinerario'
import TransmisionPage from '../pages/transmision'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/proyectos' element={<ProyectosPage />} />
        <Route path='/itinerario' element={<ItinerarioPage />} />
        <Route path='/transmision' element={<TransmisionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
