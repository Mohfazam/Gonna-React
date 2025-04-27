import { useState } from "react";
import { Password } from "./components/Password";


function App() {

  const [flag, setFlag] = useState(true);
  

  return (
    <>
    <button className="p-4 m-4 border-blue-800 border-6 bg-red-400 hover:bg-cyan-800" onClick={() => setFlag(!flag)}> Click me</button>
     <div className="p-2 m-2 border-amber-950 border-4 w-fit ">
     <Password flag={flag} />
     </div>
    </>
  )
}

export default App
