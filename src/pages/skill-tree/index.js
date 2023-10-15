import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../context/MainContext'
import "./index.css"

const SkillTree = () => {
  const {setCurrentPage, currentPage} = useContext(MainContext)
  const [transformation, setTransformation] = useState({
    transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -80, 0, 1)",
    animation: ""
  })
  useEffect(()=>{
    setCurrentPage("SkillTree")
  },[])
  
  if(currentPage == "SkillTree"){
    if(transformation.animation === ""){
      setTransformation({
        transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
        animation: "root 1s linear"
      })
    }
  }

  return (
    <div className='SkillRoot'>
      <h2>Skill Root</h2>
      <div className='Timeline' style={{ transform: transformation.transform, animation: transformation.animation}}>
        <div className='ContainerRight'></div>
        <div className='ContainerLeft'></div>
        <div className='ContainerRight'></div>
        <div className='ContainerLeft'></div>
        <div className='ContainerRight'></div>
        <div className='ContainerLeft'></div>
        <div className='ContainerRight'></div >
      </div>
    </div>
  )
}

export default SkillTree