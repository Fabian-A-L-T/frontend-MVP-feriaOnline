import React from 'react'

import NavBar from '../components/nav_bar'
import Footer from '../components/footer'

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <h2>Bienvenidos a la feria de software</h2>
      <Footer/>
    </div>
  )
}

export default HomePage
