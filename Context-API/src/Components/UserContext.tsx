import { createContext, useState } from "react";
import UserProfile from "./UserProfile";

export const Title = createContext<string>("");
export const Price = createContext<number>(0);

export const SetTitle = createContext<React.Dispatch<React.SetStateAction<string>>>(() => {});
export const SetPrice = createContext<React.Dispatch<React.SetStateAction<number>>>(() => {});

export const UserContext = () => {
  const [title, setTitle] = useState("iPhone");
  const [price, setPrice] = useState(999);

  return (
    <Title.Provider value={title}>
      <SetTitle.Provider value={setTitle}>
        <Price.Provider value={price}>
          <SetPrice.Provider value={setPrice}>
            <UserProfile />
          </SetPrice.Provider>
        </Price.Provider>
      </SetTitle.Provider>
    </Title.Provider>
  );
};


