import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Projects from './pages/projects'
import Tasks from './pages/tasks'
import Login from './pages/login'
function App() {
  
  return (
  <div>
  <div className='text-amber-300 text-1xl font-bold '>VANAKAM NANBARGALE!</div>
  <div className='text-red-500 text-2xl font-serif '>KADINAMA IRUNGA</div><br></br>
  
  <BrowserRouter>
  <Routes>
    <Route path="projects" element={<Projects/>}/>
    <Route path="tasks" element={<Tasks/>}/>
    <Route path="login" element={<Login/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App