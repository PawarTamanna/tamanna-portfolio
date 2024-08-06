import React from 'react'
import './Contact.css'
import {HiOutlineMailOpen} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contacy_options">
          <article className="contact_option">
            <HiOutlineMailOpen className='contact-option-icon'/>
            {/* my mail */}
            <h4>Email</h4>
            <h5>tamannapawar0704@gmail.com</h5>
            <a href="mailto:tamannapawar@iitgn.ac.in" target='_blanck'>Send the message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact-option-icon'/>
            {/* my number */}
            <h4>WhatsApp</h4>
            <h5>+91 9724479551</h5>
            <a href="https://api.whatsapp.com/send?phone+919724479551" target='_blanck'>Send the message</a>
          </article>
        </div>
        {/* form for contact */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>


      </div>
      
    </section>
  )
}

export default Contact
