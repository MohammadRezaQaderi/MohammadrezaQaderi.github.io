import './Footer.css'
import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter, IoLogoTwitch} from 'react-icons/io'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MGH27</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://Twitch.com"><IoLogoTwitch/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer