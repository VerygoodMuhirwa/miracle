import React from 'react'
import "./footer.css"
import {IoLogoTwitter} from "react-icons/io" 
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Verygood</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portifolio">Portifolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Verygood portifolio done</small>
      </div>
    </footer>
  )
}

export default Footer