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
import Dash from './pages/Admin/dash'
import Setting from './pages/Admin/setting'
import UserDetails from './pages/Admin/userdetails'
import Admin from './pages/Admin/adminLayout'
function App() {
  
  return (
  <div><br></br>
  <div className='text-amber-300 text-2xl font-bold text-center'>VANAKAM NANBARGALE!</div>
  <BrowserRouter>
  <Routes>
  <Route path="/dashboard" element={<Dashboard/>}>
    <Route path="projects" element={<Projects/>}/>
    <Route path="team" element={<Team/>}/>
    <Route path="tasks" element={<Tasks/>}/>
    <Route path="settings" element={<Settings/>}/>
  </Route>
    <Route path="login" element={<Login/>}/>
    <Route path="calender" element={<Calender/>}/>
    <Route path="client" element={<Client/>}/>
    
    <Route path="register" element={<Register/>}/>
    <Route path="/admin" element={<Admin/>}>
      <Route path="dash" element={<Dash/>}/>
      <Route path="setting" element={<Setting/>}/>
      <Route path="userdetails" element={<UserDetails/>}/>
    </Route>
  </Routes>
  </BrowserRouter> 
  </div>
  )
}

export default App