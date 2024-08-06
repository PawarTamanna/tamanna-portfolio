import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
// left sided links in intro part like linkedIn and github
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/tamanna-pawar-019038228/" > <BsLinkedin /> </a>
      <a href="https://github.com/PawarTamanna" > <FaGithub /> </a>
    </div>
  )
}

export default HeaderSocials
