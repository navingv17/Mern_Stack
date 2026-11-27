import { Link, Outlet } from "react-router-dom";

function Admin() {
    return ( 
    <>
    {Admin}
        <nav>
            <Link to="dash">Dashboard</Link>
            <Link to="userdetails">User Details</Link>
            <Link to="setting">Settings</Link>
        </nav>  
        <Outlet/>
    </>
     );
}

export default Admin;