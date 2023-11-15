import React from 'react'

import NavBar from '../components/nav_bar'
import Footer from '../components/footer'

export const TransmisionPage = () => {
  return (
    <div className='page'>
      <NavBar />
      <h1 className='page__title'>Transmision</h1>
      <div className='transmission-container'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <Footer/>
    </div>
  )
}

export default TransmisionPage