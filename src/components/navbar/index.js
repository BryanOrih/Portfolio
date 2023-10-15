import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import { MainContext } from '../../context/MainContext'
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {
  const {currentPage, navTranslate, setNavTranslate, navTransition, setNavTransition} = useContext(MainContext)
  useEffect(()=>{
    setNavTransition("900ms ease-out")
    setNavTranslate("none");
  }, [currentPage])
  const handleChange = ()=>{
    setNavTransition("900ms ease-out")
    setNavTranslate("none");
  }
  const handleClick = (channelName) => {
    if(currentPage == channelName){
      handleChange()
    }else{
      setNavTransition("none")
      setNavTranslate("translateY(-100px)");
    }
  };
  return (
    <nav id='PortfolioNav' style={{ transform: navTranslate, transition: navTransition}}>
      <Link to={"/"}><img src={require('../../images/Logo.png')} onClick={()=>{handleClick("Home")}}/></Link>
      <div className='NavLinks'>
        <Link onClick={()=>{handleClick("About")}} to={"/About"} style={{color: currentPage == 'About'? "#918C8C": "#FFF", textDecoration: currentPage == "About"? "underline": "none"}}>About</Link>
        <Link onClick={()=>{handleClick("SkillTree")}} to={"/SkillTree"} style={{color: currentPage == 'SkillTree'? "#918C8C": "#FFF", textDecoration: currentPage == "SkillTree"? "underline": "none"}}>Skill Tree</Link>
        <Link onClick={()=>{handleClick("Portfolio")}} to={"/Portfolio"} style={{color: currentPage == 'Portfolio'? "#918C8C": "#FFF", textDecoration: currentPage == "Portfolio"? "underline": "none"}}>Portfolio</Link>
        <Link onClick={()=>{handleClick("Contact")}} to={"/Contact"} style={{color: currentPage == 'Contact'? "#918C8C": "#FFF", textDecoration: currentPage == "Contact"? "underline": "none"}}>Contact</Link>
      </div>
      <div className='SocialLinks'>
      <a href="https://github.com/BryanOrih" target="_blank"><i className="fa-brands fa-github"></i></a>
      <a href="" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
      <a href="" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
      <a href="https://www.instagram.com/surrogate_pyruvate/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
      </div>
    </nav>
  )
}

export default Nav