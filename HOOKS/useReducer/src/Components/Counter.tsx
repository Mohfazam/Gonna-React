import { useReducer } from "react";
import { reducer, initialState } from "../utils/counterReducer";

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">useReducer Counter</h1>
        <h3 className="text-2xl border-4 border-gray-700 rounded-lg px-8 py-4 shadow-md">
          Counter: <span className="text-blue-400">{state.count}</span>
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
          className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg transition"
        >
          Reset
        </button>

        <button
          onClick={() => dispatch({ type: "valueIncrease", payload: 30 })}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"
        >
          +30
        </button>

        <button
          onClick={() => dispatch({ type: "valueDecrease", payload: 30 })}
          className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg transition"
        >
          -30
        </button>
      </div>
    </div>
  );
};
