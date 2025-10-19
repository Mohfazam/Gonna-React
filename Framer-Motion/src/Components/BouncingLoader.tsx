import { motion } from "framer-motion";

const BouncingLoader = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      {[...Array(3)].map((_, index) => (
        <motion.div
        key={index}
          className="border-2 w-8 h-8 bg-red-400 m-4 p-2 rounded-full"

          animate={{
            y: [0, -20, -20, 0]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  )
}

export default BouncingLoader;