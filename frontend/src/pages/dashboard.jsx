import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
function Dashboard() {
    const location=useLocation();
    const [userdata,setUserdata]=useState(" ")
    const [count,setCount]=useState(0)
    function display(){
        setUserdata(location.state)
        console.log(userdata)
    }
    useEffect(()=>{
                setUserdata(location.state)
                console.log(userdata),[count]
    })
    return ( 
        <div><div>
        <nav className="bg-slate-800 text-white px-6 py-4 shadow-md">
        <div className="flex justify-center gap-8">
            <Link to="projects">Projects</Link>
            <Link to="team">Team</Link>
            <Link to="tasks">Tasks</Link>
            <Link to="settings">Settings</Link>
        </div>
        </nav><Outlet/>
        </div>
        <div className="flex justify-center items-center">
        User Details<br></br>
        Email : {userdata.email}<br></br>
        Password : {userdata.password}<br></br>
        </div>
        <div className="flex justify-center items-center"><button className=" bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 active:bg-blue-800  transition-colors cursor-pointer" 
        onClick={display}>Display details</button></div>
        <button onClick={()=>setCount(count+1)}>count</button>
        </div> 
        
     );
}

export default Dashboard;