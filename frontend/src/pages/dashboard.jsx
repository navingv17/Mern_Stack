import { useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location=useLocation();
    const [userdata,setUserdata]=useState(" ")
    function display(){
        setUserdata(location.state)
        console.log(userdata)
    }
    return ( 
        <div>
        <button onClick={display}>Display</button>
        </div>
        
     );
}

export default Dashboard;