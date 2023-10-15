import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../context/MainContext'
import "./index.css"
import AboutPageBlob from '../../components/aboutPageBlob'
const About = () => {
  const {setCurrentPage} = useContext(MainContext)
  useEffect(()=>{
    setCurrentPage("About")
  },[])
  return (
    <div className='AboutSection'>
      <div className='AboutMe'>
        <AboutPageBlob/>
        <div>
          <h1>
            About me.
          </h1>
          <p>
           I am  a junior developer based in Washington State’s Greater Seattle area
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          </p>
        </div>
      </div>
      <div className='RandomFacts'> Ranodm</div>
      <div className='MyStory'> My Story</div>
    </div>
  )
}

export default About