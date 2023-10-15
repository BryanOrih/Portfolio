import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../context/MainContext'

const Portfolio = () => {
  const {setCurrentPage} = useContext(MainContext)
  useEffect(()=>{
    setCurrentPage("Portfolio")
  },[])
  return (
    <div>Portfolio</div>
  )
}

export default Portfolio