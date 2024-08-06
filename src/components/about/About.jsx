import React from 'react'
import './About.css'
import ME from '../../assets/tn4.jpeg'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
        {/* Image of about section */}
          <div className="about_me-image">
            <img src={ME} alt='My profile'/>
          </div>
        </div>
        <div className="about_content">
          {/* About me section cards */}
          <div className="about_cards">
            {/* <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small></small>
            </article> */}
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>1</small>
            </article>
            <article className='about_card'>
              <BsFolderCheck className='about_icon' />
              <h5>Projects</h5>
              <small>3+ completed projects</small>
            </article>
          </div>
{/* into of about me section */}
          <p>
          Hello,I'm Tamanna Pawar, an Electrical Engineering student at IIT Gandhinagar, with a strong passion for Frontend Web Development.My skill set encompasses a proficiency in HTML, CSS, JavaScript, and ReactJS.In addition to my coursework, I've led a team of 25 members in developing a real-time pothole detection system, demonstrating my leadership and collaboration skills.
          </p>
          {/* link directs to contact me section */}
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
