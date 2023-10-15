import React, { createContext, useState } from 'react'

export let MainContext = createContext()

const MainContextProvider = (props) => {
    const [currentPage, setCurrentPage] = useState("")
    const [navTranslate, setNavTranslate] = useState("none")
    const [navTransition, setNavTransition] = useState("900ms ease-out")

    let object = {
        currentPage, setCurrentPage,
        navTranslate, setNavTranslate,
        navTransition, setNavTransition
    }
  return (
    <MainContext.Provider value={object}>
        {props.children}
    </MainContext.Provider>
  )
}

export default MainContextProvider