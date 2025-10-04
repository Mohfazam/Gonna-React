
import { createContext } from 'react'
import './App.css'
import { UserContext } from './Components/UserContext';


export const Name = createContext<string>("");
export const Age = createContext<number>(0);
function App() {

  return (
    <>
      {/* <Name.Provider value={name}>
        <Age.Provider value={age}>
          <ComponentA />
        </Age.Provider>
      </Name.Provider> */}

      <UserContext />
    </>
  )
}

export default App
