import { useState } from 'react'

import './App.css'

// interface TaskType{
//   task: string;
//   status: boolean;
// }

function App() {
  const [inputValue, setinputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleTask = () => {
    const newTask = {
      task: inputValue,
      status: "due"
    }

    setTask()
  };

  return (
    <>
      <div>
        TODO APP;
      </div>

      <div>
        <strong>Task:</strong>
        <input type="text" placeholder='Enter Task' onChange={(e) => setinputValue(e.target.value)}/>
      </div>

      <div>
        <button onClick={setTask(() => )}>Add task</button>
      </div>
    </>
  )
}

export default App
