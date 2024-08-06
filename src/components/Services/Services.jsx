import React from 'react'
import './Services.css'
import {BsArrowReturnRight} from 'react-icons/bs'
// this part contains details about my projects

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Personal Portfolio</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsArrowReturnRight className='service_list-icon'/>
              <p>Proficient in building web application using ReactJS, with a focus on creating a personal portfolio website to showcase skills, projects and achivements.</p>
            </li>
            <li>
              <BsArrowReturnRight className='service_list-icon'/>
              <p>Created a dedicated section to show personal projects, including detailed descriptions, images, and links to live demos and code repositories.</p>
            </li>
            <li>
              <BsArrowReturnRight className='service_list-icon'/>
              <p>Highlighted skills and areas of expertise, using visual aids or icons to communicate proficiency levels.</p>
            </li>
            <li>
              <BsArrowReturnRight className='service_list-icon'/>
              <p>Provided downloadable versions of resume, Including contact information and links to social profiles for easy connection and communication.</p>
            </li>
          </ul>

        </article>


        <article className='service'>
          <div className="service_head">
            <h3>E-commercial Website</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsArrowReturnRight className='service_list-icon'/>
              <p>Created a dynamic e-commerce shopping website utilising HTML, CSS and Bootstrap framework.</p>
            </li>
            <li>
              <BsArrowReturnRight className='service_list-icon'/>
              <p>Generated a visually appealing and user-friendly interface, ensuring seamless navigation.</p>
            </li>
            <li>
              <BsArrowReturnRight className='service_list-icon' />
              <p>Conducted thorough testing and debugging to ensure proper functionality and browser compatibility.</p>
            </li>
            <li>
              <BsArrowReturnRight className='service_list-icon'/>
              <p>Customised and styled website elements using CSS and Bootstrap to enhance the website’s aesthetics
and design coherence.</p>
            </li>
          </ul>

        </article>


        <article className='service'>
          <div className="service_head">
            <h3>Image Search App</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsArrowReturnRight className='service_list-icon'/>
              <p>Proficient in developing web applications using HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BsArrowReturnRight className='service_list-icon'/>
              <p>Successfully integrated third-party APIs, to fetch and display image search results within the app.</p>
            </li>
            <li>
              <BsArrowReturnRight className='service_list-icon'/>
              <p>Utilized JavaScript to add interactivity and dynamic functionality to the app, including real-time search updates and responsive design.</p>
            </li>
            <li>
              <BsArrowReturnRight className='service_list-icon'/>
              <p>Developed a responsive design to ensure the app functions seamlessly on various devices, including desktops, tablets, and smartphones.</p>
            </li>
          </ul>

        </article>
      </div>
    </section>
  )
}

export default Services
