import { useState } from 'react'
function Login(){
     {/*const [count, setCount] = useState(0)
      const [email, setEmail] = useState('')
      const [pass, setPass] = useState('')*/}
      
      const [formdata ,setFormdata]=useState({
        email:" ",
        password:" "
      })
      function handlechange(e){
        setFormdata(...formdata,
          [e.target.name]=e.target.value
        )
      }
      function print(e){
        e.preventDefault()
        console.log(email,password)
      }
    return(
    <div><div class="flex flex-col items-center space-y-5 border border-gray-300 rounded-lg p-4 w-fit mx-auto bg-gray-50">
    <form>
      Email :  <input class="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600" type="email" placeholder='your email' name="email"value={email} onChange={handlechange}></input>
    </form>  
    <form>
      Password :  <input class="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600" type="password" placeholder=' password'name="password" value={password} onChange={handlechange}></input>
    </form>
    <br></br>
    <button class="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 active:bg-blue-800  transition-colors cursor-pointer" type="Submit" onClick={(e)=>print(e)}>Login</button>
    </div></div>
    )
}
export default Login