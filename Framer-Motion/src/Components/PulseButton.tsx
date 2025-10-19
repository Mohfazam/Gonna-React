import { motion } from "framer-motion";

const PulseButton = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <motion.div
        className="border-2 p-2 rounded text-white"
        
        animate={{
          scale: [1, 2, 2, 1],
          backgroundColor: ["#ff0000", "#0000ff", "#0000ff", "#ff0000"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Pulse Button
      </motion.div>
    </div>
  );
};

export default PulseButton;