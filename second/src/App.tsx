// import { useState } from "react";
// import { Password } from "./components/Password";


// function App() {

//   const [flag, setFlag] = useState(true);
  

//   return (
//     <>
//     <button className="p-4 m-4 border-blue-800 border-6 bg-red-400 hover:bg-cyan-800" onClick={() => setFlag(!flag)}> Click me</button>
//      <div className="p-2 m-2 border-amber-950 border-4 w-fit ">
//      <Password flag={flag} />
//      </div>
//     </>
//   )
// }

// export default App






import { useState } from "react";
import { Weather } from "./components/Weather";
import { Profile } from "./components/Profile";
import { Time } from "./components/Time";


function App() {

  
  const [value, setValue] = useState(0);

  function detectTime() {
    const hour = new Date().getHours(); 
    console.log(hour);
    if(hour > 5 && hour < 12){
      return "Morning"
    } else if(hour >= 21 || hour <= 5){ 
      return "Night"
    } 
    else{
      return "Evening"
    }
  }

  return (
    <>
     <div className="p-2 m-2 border-amber-950 border-4 w-fit ">
      
      <input type="text" onChange={(e) => setValue(Number(e.target.value))} placeholder="Enter the Temprature"/>
      <Weather temprature={value} />
     </div>

     <div className="p-2 m-2 border-amber-950 border-4 w-fit ">
      
      <Profile isAdmin={false} LoggedIn={false} />
     </div>

     <div className="p-2 m-2 border-amber-950 border-4 w-fit ">
      
      <Time timing={detectTime()}></Time>
     </div>
    </>
  )
}

export default App
