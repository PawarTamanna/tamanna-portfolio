import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonals from './components/Testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
         <Header />
         <Nav />
         <About />
         <Experience />
         <Services />
         <Portfolio />
         <Testimonals />
         <Contact />
         <Footer />
    </>
  )
}

export default App
