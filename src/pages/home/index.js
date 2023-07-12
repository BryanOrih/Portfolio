import React from 'react'
import './index.css'
import { Canvas } from '@react-three/fiber'
import Blob from '../../components/blob'
const Home = () => {
  return (
    <div className='HomePage'>
      <div className='HomeImage'>
       <Canvas camera={{position: [0.0, 0.0, 8.0]}}>
        <Blob/>
       </Canvas>
      </div>
      <div className='MainText'>
        <h1>Bryan Orihuela Alvarez</h1>
        <p>Full-Stack Software Developer</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp amet, consectetur adipiscing elit, sed do </p>
        <button>Contact</button>
      </div>
    </div>
  )
}

export default Home