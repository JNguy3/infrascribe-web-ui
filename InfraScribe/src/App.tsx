import { HomePage } from "./components/HomePage.tsx"
import { BotChat } from './components/InfraAgent.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return(
    <BrowserRouter>
      <div className="w-full bg-slate-50">
        <Routes>
          <Route path ='/' element = {<HomePage/>} />
          <Route path = '/chat' element = {<BotChat/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
