import { useState } from 'react'
import ki from "../assets/ki.jpg"
import { useLocation, useNavigate } from 'react-router-dom'
function Login(){
    const location=useLocation();
      const navigate=useNavigate();
      const [logindata ,setLogindata]=useState({
        email:" ",
        password:" "
      })
      function handlechange(e){
        setLogindata({...logindata,
          [e.target.name]:e.target.value
      })
      }
      const print=(e)=>{
        e.preventDefault()
        console.log("login data",logindata)
        const userdata=location.state
        console.log("userdata",userdata)
        if(userdata.email===logindata.email && userdata.password===logindata.password){
        alert("Login successful!")
        navigate("/dashboard",{state:logindata})}
        else{
        alert("INVALID CREDENTIALS!")
        }
      }
    return(     
    <div>
      
  <div className='text-red-500 text-4xl font-serif text-center '>KADINAMA IRUNGA</div><br></br> 
    <img src={ki} alt="A clear description of the image" className='block mx-auto w-1/2' /><br></br>  
    <form onSubmit={print}>
    <div className="flex flex-col items-center space-y-5 border border-gray-300 rounded-lg p-4 w-fit mx-auto bg-gray-50">
    <div>
      Email :  <input required className="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600" 
                      type="email" placeholder='Enter email' name="email" onChange={handlechange}></input>
    </div> 
    <div>
      Password :  <input required className="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600" 
                         type="password" placeholder='Enter password' name="password"  onChange={handlechange}></input>
    </div>
    <br></br>
    <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 active:bg-blue-800  transition-colors cursor-pointer" 
            type="Submit">Login</button>
    </div>
    </form>
    </div>
    )
}
export default Login