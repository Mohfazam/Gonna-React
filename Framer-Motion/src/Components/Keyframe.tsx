import { motion } from "framer-motion"
const Keyframe = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <motion.div className="box" 
      
      animate={{
        scale: [1, 2]
      }}
      transition={{
        delay: 2,
        duration: 3
      }}
      />
    </div>
  )
}

export default Keyframe
