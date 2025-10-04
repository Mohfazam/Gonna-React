import { useContext } from "react"
import { Age, Name } from "../App"


export const ComponentC = () => {

  const name = useContext(Name);
  const age = useContext(Age);

  return (
    <div>
      The Name is: {name}, and i got {age} old 
    </div>
  )
}

