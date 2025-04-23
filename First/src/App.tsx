import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { MainContent } from "./components/MainContent"
import { DateAndTime } from "./components/CurrentTime"
import { List } from "./components/List"

function App() {

  return (
    <div className="w-screen h-screen flex justify-start items-start flex-col">
       <Header />
       <DateAndTime />
       <List />
       <MainContent />
       <Footer/>
    </div>
  )
}

export default App
