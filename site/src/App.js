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
    <main>
      {
        backData.map(data => <div key={data.id}><h1>{data.text}</h1> <h2>{data.details}</h2></div>)
      }
    </main>
  )
}

export default App