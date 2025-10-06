
import './App.css'
import { useFetch } from './Hooks/useFetch'

function App() {

  const [data] = useFetch();


  return (
    <div>
      {data!.map((d) => (
        <div key={d.id} className="mb-5 p-2 border-b border-gray-300">
          userId: {d.userId} <br />
          Id: {d.id} <br />
          title: {d.title} <br />
          completed: {d.completed ? "Yes" : "No"}
        </div>
      ))}

    </div>
  )
}

export default App
