import { motion } from "framer-motion"
const Keyframe = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <motion.div className="box" 
      
      animate={{
        // scale: [1, 2, 3, 3, 2, 1]
        rotate: [0, 20, 30, 50, 60, 80, 120, 190, 220, 250, 250,220, 180, 120, 80, 50, 20, 0],
        borderRadius:['20%', '25%',  '35%', '45%', '60%', '70%', '80%', '90%', '100%']
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
