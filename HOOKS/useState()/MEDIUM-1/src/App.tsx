import { useState } from 'react'

import './App.css'

// interface TaskType{
//   task: string;
//   status: boolean;
// }

function App() {
  const [tesk, setTask] = useState([{}])

  return (
    <>
      <div>
        TODO APP;
      </div>

      <div>
        <strong>Task:</strong>
        <input type="text" placeholder='Enter Task'/>
      </div>

      <div>
        
      </div>
    </>
  )
}

export default App
