import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/pro1.png'
import IMG2 from '../../assets/pro2.png'
import IMG3 from '../../assets/img2.png'
import IMG4 from '../../assets/pro3.png'
import IMG5 from '../../assets/pro5.png'
import IMG6 from '../../assets/pro6.png'
// this part of protfolio included all the projects I done

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>Personal Portfolio</h3>
            <div className="portfolio-item-cta">
              <a href="https://github.com/PawarTamanna/TamannaPersonalPortfolio.git.io" className='btn' target='_black'>Github</a>
              {/* <a href="#" className='btn btn-primary'>Live demo</a> */}
            </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Image search app (using API)</h3>
            <div className="portfolio-item-cta">
              <a href="https://github.com/PawarTamanna/ImageSearchApp.git.iok" className='btn' target='_black'>Github</a>
              <a href="https://pawartamanna.github.io/ImageSearchApp.git.io/" className='btn btn-primary' target='_black'>Live demo</a>
            </div>
          
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>E-commercial website</h3>
            <div className="portfolio-item-cta">
              <a href="https://github.com/PawarTamanna/TN.git.io" className='btn' target='_black'>Github</a>
              <a href="https://pawartamanna.github.io/TN.git.io/TN.html" className='btn btn-primary' target='_black'>Live demo</a>
            </div>
          
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>Portfolio webpage (Metis - Coding club at IIT Gandhinagar project)</h3>
            <div className="portfolio-item-cta">
              <a href="https://github.com/PawarTamanna/RahulPortfolio.git.io" className='btn' target='_black'>Github</a>
              <a href="https://pawartamanna.github.io/RahulPortfolio.git.io/" className='btn btn-primary' target='_black'>Live demo</a>
            </div>
          
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
            <h3>QR Generator</h3>
            <div className="portfolio-item-cta">
              <a href="https://github.com/PawarTamanna/QR_Generator.git.io" className='btn' target='_black'>Github</a>
              <a href="https://pawartamanna.github.io/QR_Generator.git.io/" className='btn btn-primary' target='_black'>Live demo</a>
            </div>
          
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
            <h3>My To-Do List</h3>
            <div className="portfolio-item-cta">
              <a href="https://github.com/PawarTamanna/My_To-Do_List.git.io" className='btn' target='_black'>Github</a>
              <a href="https://pawartamanna.github.io/My_To-Do_List.git.io/" className='btn btn-primary' target='_black'>Live demo</a>
            </div>
          
        </article>
      </div>
    </section>
  )
}

export default Portfolio
