import { motion } from 'framer-motion'
import { useState } from 'react'

const Varients = () => {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <motion.div className="box"

                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.5 }
                }}

                initial="hidden"
                animate={isVisible ? "visible" : 'hidden'}
                exit={'exit'}

                transition={{
                    duration: 0.3
                }}

                onClick={() => setIsVisible(!isVisible)}

            />
        </div>
    )
}

export default Varients