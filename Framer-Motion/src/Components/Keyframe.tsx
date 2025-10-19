import { motion } from "framer-motion"
const Keyframe = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <motion.div className="box" 
      
      animate={{
        scale: [1, 2, 3, 3, 2, 1]
      }}
      transition={{
        delay: 2,
        duration: 10,
        ease: "linear"
      }}
      />
    </div>
  )
}

export default Keyframe
