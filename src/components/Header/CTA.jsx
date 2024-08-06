import React from 'react'
import Resume from '../../assets/Tamanna_PAWAR_webdev.docx (1).pdf'

const CTA = () => {
  return (
    <div className='cta'>
      {/* resume link */}
      <a href={Resume} className='btn'>Download Resume</a>
      {/* button to direct to contact me part */}
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
