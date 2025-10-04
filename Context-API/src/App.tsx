
import { createContext } from 'react'
import './App.css'
import { ComponentA } from './Components/ComponentA'


export const Name = createContext<string>("");
function App() {

  const name = "Sarwar"

  return (
    <>
      <Name.Provider value={name}>
        <ComponentA />
      </Name.Provider>
    </>
  )
}

export default App
