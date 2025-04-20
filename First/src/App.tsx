import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { MainContent } from "./components/MainContent"

function App() {

  return (
    <div className="w-screen h-screen flex justify-start items-start flex-col">
       <Header />
       <MainContent />
       <Footer/>
    </div>
  )
}

export default App
