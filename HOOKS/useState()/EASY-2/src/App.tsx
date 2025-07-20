import { useState } from 'react'
import './App.css'

function App() {
  const [type, setType] = useState(true);

  return (
    <>
      <div>
        <h1>Password Toggle:</h1>
        <div>
          <span>
            Enter Password: 
              <input type={type? "text" : "password"} placeholder='Enter your password'/>
          </span>
        </div>
        <div>
          <button onClick={() => setType(!type)}>Toggle</button>
        </div>
      </div>
    </>
  )
}

export default App
