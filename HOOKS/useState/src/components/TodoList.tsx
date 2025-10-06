import { useState } from "react"

interface TodoProp {
    id: number;
    task: string;
    status: boolean;
}


const TodoList = () => {

    const [todo, setTodo] = useState<TodoProp[]>([]);
    const [id, setId] = useState(0);
    const [task, setTask] = useState("");
    const [status, setStatus] = useState(false);

    const addTodo = () => {
        const newId = id + 1;
        setId(newId);
        const newTodo:TodoProp = {
            id:  newId,
            task: task,
            status: false
        };
        setTodo([...todo, newTodo]);
    }

    const todoDone = (id: number) => {
        setTodo(todo.map( (t) => (
            t.id === id ? {...t, status: true}: t
        )));
    }

    return (
        <div>
            Todo List: <ul>
                {todo.map((m) => (
            <li>{m.id} - {m.task} - {m.status ? (
                <span>Completed</span>
            ) : (
                <input type="checkbox" onClick={() => todoDone(m.id)}/>
            )}</li>
                ))}
            </ul>

            <br />
            <div>
                <input type="text" placeholder="task" onChange={(e) => setTask(e.target.value)}/>
                <button onClick={addTodo}>Add Todo</button>
            </div>
        </div>
    )
}

export default TodoList
