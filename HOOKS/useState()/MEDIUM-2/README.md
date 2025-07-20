🧾 2. Multi-Step Form
🧠 What to Do:
Create a form divided into steps. For example:

Step 1: Enter name

Step 2: Enter email

Step 3: Show summary

Add “Next” and “Back” buttons to navigate.

🎯 Learning Goals:
Track multiple pieces of state (name, email, step)

Conditionally render form based on step

Combine multiple input fields with validation logic (optional)

🧱 Components Involved:
Multiple steps (can be 3 different JSX blocks)

Navigation buttons (Next, Back)

📦 State Example:

const [step, setStep] = useState(1);
const [formData, setFormData] = useState({
  name: '',
  email: ''
});
🧩 UI/UX Flow:
User fills name → clicks Next → goes to email step

Fills email → clicks Next → summary is displayed

Can go back to previous step to edit

✅ Outcome:

Step 1:
Name: [_________] [Next]

Step 2:
Email: [_________] [Back] [Next]

Step 3:
Summary:
Name: John
Email: john@example.com
[Back] [Submit]