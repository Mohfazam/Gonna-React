import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("")

  return (
    <>
      <div>
        <div>
          <h1>Enter Something: </h1>
        </div>
        <input type="text" onChange={(e) => {setText(e.target.value)}}/>
      </div>
      <div>
        <strong>You Entered: {text}</strong>
      </div>
    </>
  )
}

export default App
