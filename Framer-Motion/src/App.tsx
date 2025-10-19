
import "./App.css"
import BouncingLoader from "./Components/BouncingLoader"




const App = () => {
  return (
    // <div className="flex justify-center items-center h-[100vh]">
    //   <motion.div className="box" 
    //   initial={{ x: 0 }}
    //   animate={{ x:200 }}
    //   transition={{
    //     delay: 3,
    //     duration: 3,
    //   }}
    //   />
    // </div>

    <div>
      {/* <Keyframe /> */}
      {/* <PulseButton /> */}
      <BouncingLoader />
    </div>
  )
}

export default App
