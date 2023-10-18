import React from 'react'

import NavBar from '../components/nav_bar'
import ProjectContainer from '../components/project_container'

import FESW_Logo from '../assets/fesw-logo.png'

export const ProyectosPage = () => {
  return (
    <div className='page'>
      <NavBar />
      <h1 className='page__title'>Proyectos</h1>
      <h2>Buscar</h2>
      <ProjectContainer softwareName={'algo'}   teamName={'test 1'} tags={['IA', 'IoT']} img={FESW_Logo}/>
      <ProjectContainer softwareName={'algo 2'} teamName={'test 2'} tags={['Seguridad']}/>
      <ProjectContainer softwareName={'algo 3'} teamName={'test 3'} tags={['Diseño', '3D']}/>
      <ProjectContainer softwareName={'algo 4'} teamName={'test 4'} tags={['IA']}/>
      <ProjectContainer softwareName={'algo 5'} teamName={'test 5'} tags={['IoT']}/>
    </div>
  )
}

export default ProyectosPage