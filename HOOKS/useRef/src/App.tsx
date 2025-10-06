
import './App.css'

function App() {
  

  return (
    <>
      <Demo />
    </>
  )
}

export default App




import {useState, useRef } from "react";

export const Demo = () => {
  const [count, setCount] = useState(0); // triggers re-render
  const countRef = useRef(0);            // does NOT trigger re-render

  console.log("Component rendered!");

  return (
    <div>
      <p>State count: {count}</p>
      <p>Ref count: {countRef.current}</p>

      <button onClick={() => setCount(count + 1)}>Increment State</button>
      <button onClick={() => { countRef.current += 1; console.log(countRef.current) }}>Increment Ref</button>
    </div>
  );
};
