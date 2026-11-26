import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Projects from './pages/projects'
import Tasks from './pages/tasks'
import Login from './pages/login'
import Calender from './pages/calender'
import Dashboard from './pages/dashboard'
import Settings from './pages/settings'
import Team from './pages/team'
import Client from './pages/client'
import Register from './pages/register'
function App() {
  
  return (
  <div>
  <div className='text-amber-300 text-2xl font-bold text-center'>VANAKAM NANBARGALE!</div>
  <div className='text-red-500 text-4xl font-serif text-center '>KADINAMA IRUNGA</div><br></br>
  <BrowserRouter>
  <Routes>
    <Route path="projects" element={<Projects/>}/>
    <Route path="tasks" element={<Tasks/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="calender" element={<Calender/>}/>
    <Route path="client" element={<Client/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="settings" element={<Settings/>}/>
    <Route path="team" element={<Team/>}/>
    <Route path="register" element={<Register/>}/>
  </Routes>
  </BrowserRouter> 
  </div>
  )
}

export default App