import { useState } from 'react'

import './App.css'

interface FormType{
  name: string;
  email: string;
}

function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState<FormType>({name: "", email:""});

  const handleSummary = () => {
    const formData = {
      name: name,
      email: email
    }
    setFormData(formData);
  }

  return (
    <>
      <div>
        <h1>
          Multi-Step Form
        </h1>

        
      </div>

      <div>
        {step === 1 ? (
          <div>
            <h3>
          Enter Name:
          <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
          <button onClick={() => setStep(2)}>Next</button>
        </h3>
          </div>
        ) : (
          <h3>
          Enter Name:
          <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        </h3>
        )

        }
      </div>

      <div>
        <button onClick={handleSummary}>Show Summary</button>
      </div>

      {name === '' && email === '' ? (
        <span>Fill the form first</span>
      ) : (
        <div>
          Summary:
            <strong>name is: {formData.name}</strong><br />
            <strong>Email is: {formData.email}</strong>
        </div>
      )}
    </>
  )
}

export default App
