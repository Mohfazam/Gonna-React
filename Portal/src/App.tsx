import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CopyInput } from './components/CopyInput'

function App() {
  const [count, setCount] = useState("");

  return (
    <>
      <CopyInput />
    </>
  )
}

export default App
