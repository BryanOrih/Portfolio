import React from 'react'
import './index.css'
const Nav = () => {
  return (
    <nav id='PortfolioNav'>
      <img src={require('../../images/Logo.png')}/>
      <div className='NavLinks'>
        <a>Home</a>
        <a>About</a>
        <a>Skill Tree</a>
        <a>Portfolio</a>
        <a>Contact</a>
      </div>
      <div className='SocialLinks'>
      <i class="fa-brands fa-github"></i>
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-linkedin-in"></i>
      <i class="fa-brands fa-instagram"></i>
      </div>
    </nav>
  )
}

export default Nav