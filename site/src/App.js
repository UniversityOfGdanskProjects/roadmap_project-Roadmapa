//pobrać wtyczkę React Snippets w VSC

import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"

function App() {
  
  const [backData, backDataSet] = useState([])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        backDataSet(data)
      }
    )
  }, [])

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App