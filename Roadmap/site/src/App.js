//pobrać wtyczkę React Snippets w VSC

import React, { useEffect, useState } from 'react'

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
    <div>
      hello
    </div>
  )
}

export default App