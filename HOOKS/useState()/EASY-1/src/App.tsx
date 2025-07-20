import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Counter APP:</h1>
        <div>
          <h3>{count}</h3>
        </div>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
      </div>


    </>
  )
}

export default App
