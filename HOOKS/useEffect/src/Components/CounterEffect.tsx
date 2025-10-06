import { useEffect, useState } from "react"

export const CounterEffect = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Render due to counter");
        document.title = String(counter);
    }, [counter])
    return(
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={() => setCounter(counter+1)}>Increment</button>

        </div>
    )
}