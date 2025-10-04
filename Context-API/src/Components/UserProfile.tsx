import { useContext } from "react"
import { Price, SetPrice, SetTitle, Title } from "./UserContext"


const UserProfile = () => {

    const title = useContext(Title);
    const price = useContext(Price);

    const setTitle = useContext(SetTitle);
    const setPrice = useContext(SetPrice);
  return (
    <div>
      Title: {title}
      <br />
      Price: {price}

      <br />
      <br />

      <button onClick={() => setTitle("Samsung Galaxy")}>Change Title</button>
      <button onClick={() => setPrice(price + 100)}>Change Title</button>
    </div>
  )
}

export default UserProfile
