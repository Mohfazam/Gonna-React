import { motion } from "framer-motion"
import { useState } from "react"

const FlippingCard = () => {

    const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div  onClick={() => setIsFlipped(!isFlipped)}  style={{ perspective: 1000 }}>
      <motion.div variants={{
        front: {rotateY: 0},
        back: {rotateY: 180}
      }}

      initial="front"
      animate={ isFlipped ? "back" : "front" }
      transition={{duration: 0.6}}
      className="w-64 h-40 bg-white rounded-lg relative shadow-lg" style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 backface-hidden bg-white flex items-center justify-center text-xl font-bold">
            Front
        </div>

         <div className="absolute backface-hidden inset-0 bg-white flex items-center justify-center text-xl font-bold rotate-y-[-180deg]">
            Back
        </div>

      </motion.div>

      
    </motion.div>
  )
}

export default FlippingCard
