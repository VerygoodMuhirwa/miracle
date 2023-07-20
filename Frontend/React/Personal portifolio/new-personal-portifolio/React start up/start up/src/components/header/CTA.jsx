import React from 'react'
import CV from "../../assets/New_resume.pdf"
const CTA = () => {
  return (
      <div className='cta'>
          <a href={CV} className='btn' download>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
      </div>
  )
}

export default CTA