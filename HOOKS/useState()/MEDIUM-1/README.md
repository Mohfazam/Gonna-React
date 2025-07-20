📝 1. Todo List
🧠 What to Do:
Create a mini todo app that allows a user to:

Add a task by typing in an input box and clicking "Add".

Mark tasks as completed with a checkbox.

Delete tasks.

🎯 Learning Goals:
Manage a list (array) of objects using useState.

Use unique identifiers (e.g., id) for each task.

Modify, delete, and map over state arrays.

🧱 Components Involved:
Input field

Add button

Task list display

📦 State Example:

const [todos, setTodos] = useState([]);
Each todo is an object:

{
  id: 1,
  text: "Learn React",
  completed: false
}
🧩 UI/UX Flow:
User types "Learn React" → clicks "Add"

New item added to todos

User checks the task → completed becomes true

User clicks ❌ delete → item is removed

✅ Outcome:

[Add New Task] Learn React [✔] [❌]