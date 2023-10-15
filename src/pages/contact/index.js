import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../context/MainContext'

const Contact = () => {
  const {setCurrentPage} = useContext(MainContext)
  useEffect(()=>{
    setCurrentPage("Contact")
  },[])
  return (
    <div>Contact</div>
  )
}

export default Contact