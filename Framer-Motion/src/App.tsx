import { motion } from "framer-motion"
import "./App.css"

const App = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <motion.div className="box" 
      initial={{ x: 0 }}
      animate={{ x:200 }}
      transition={{
        delay: 3,
        duration: 3,
      }}
      />
    </div>
  )
}

export default App
