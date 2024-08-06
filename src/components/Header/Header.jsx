import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/tn3.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'am</h5>
        <h1>Tamanna Pawar</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          {/* Intro image */}
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
        {/* direction for bottom */}
      </div>
    </header>
  )
}

export default Header
