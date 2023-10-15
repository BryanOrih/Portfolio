import React, { useContext, useEffect } from 'react'
import './index.css'
import { Canvas } from '@react-three/fiber'
import MainPageBlob from '../../components/mainPageBlob'
import { MainContext } from '../../context/MainContext'
import { Link, useNavigate} from 'react-router-dom'
const Home = () => {
  const {setCurrentPage, setNavTransition, setNavTranslate} = useContext(MainContext)
  useEffect(()=>{
    setCurrentPage("Home")
  },[])
  
  const handleClick = ()=>{
    setNavTransition("none")
    setNavTranslate("translateY(-100px)");
  }
  return (
    <div className='HomePage'>
      <div className='HomeImage'>
        <MainPageBlob/>
      </div>
      <div className='MainText'>
        <h1>Bryan<br/> Orihuela Alvarez</h1>
        <p>Full-Stack Software Developer</p>
        <p>Welcome! I'm a business and coding enthusiast with a super cool <br/> dog/support animal named Toby.
         With his amazing energy coupled <br/>with my hard work, I can code nearly anything!
        </p>
        <Link to={"/Contact"}><button onClick={handleClick}>Contact</button></Link>
      </div>
    </div>
  )
}

export default Home