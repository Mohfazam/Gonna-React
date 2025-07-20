import { useState } from 'react'

import './App.css'

interface TaskType{
  task: string;
  status: string;
}

function App() {
  const [inputValue, setinputValue] = useState("");
  const [task, setTask] = useState<TaskType[]>([]);

  const handleTask = () => {

    if(inputValue.trim() === '') return;

    const newTask = {
      task: inputValue,
      status: "due"
    }

    setTask([...task, newTask]);
    setinputValue("")
  };

  const handleDelete = (index:number) => {
      const updatedtask = task.filter((_, i) => i !== index);

      setTask(updatedtask);
  }

  return (
    <>
      <div>
        TODO APP;
      </div>

      <div>
        <strong>Task:</strong>
        <input type="text" placeholder={inputValue === '' ? "Enter task" : inputValue} onChange={(e) => setinputValue(e.target.value)}/>
      </div>

      <div>
        <button onClick={handleTask}>Add task</button>
      </div>

      <div>
        <h2>Tasks:</h2>
        {task.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          <ul>{task.map((item, index) => (
            <li key={index}>
              <strong>{item.task}</strong>
              &nbsp;&nbsp;
              <em>{item.status}</em>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}</ul>
        )}
      </div>
    </>
  )
}

export default App
