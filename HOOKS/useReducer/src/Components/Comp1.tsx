import { useReducer } from "react";

const initialState = {count: 0};

const reducer = (state:any, action:any) => {
    switch (action.type) {
        case "increment":
            return {...state, count: state.count+1};
        
        case "decrement":
            return {...state, count: state.count-1};

        case "reset":
            return {...state, count: 0};
    
        default:
            return {...state, count: 0}
    }
}

export const Comp1 = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <h3>Count: {state.count}</h3>
           <div className="flex gap-4 w-full justify-center">
             <button onClick={() => dispatch({type:"increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
           </div>
        </div>
    )
}