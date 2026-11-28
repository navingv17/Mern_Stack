import { useForm } from "react-hook-form";
import { registerSchema } from "../components/formSchema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate , Link} from "react-router-dom";
function Register() {
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(registerSchema)
    })
    const navigate=useNavigate();
    function onSubmit1(data){
    console.log(data)
    alert("Successfully registered")
    navigate("/login",{state:data})
    }    
    return ( 
        <div>
        <br></br>
        <form onSubmit={handleSubmit(onSubmit1)}>
        <div className="flex flex-col items-center space-y-7 border border-gray-300 rounded-lg p-4 w-80 mx-auto bg-gray-50">
            <label htmlFor="name" >
            Name :    <input id="name"className="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
            type="text" placeholder="Enter your name" {...register("name")}/>
            <p style={{ color: 'red', fontStyle: 'italic', marginTop: '4px' }}>{errors.name?.message}</p></label>

            <label htmlFor="age" >
            Age :  <input id="age"className="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
            type=" number" placeholder="Enter your age" {...register("age")}/>
            <p style={{ color: 'red', fontStyle: 'italic', marginTop: '4px' }}>{errors.age?.message}</p></label>

            <label htmlFor="email">
            Email :    <input id="email"className="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
            type="email" placeholder="Enter email id" {...register("email")}/>
            <p style={{ color: 'red', fontStyle: 'italic', marginTop: '4px' }}>{errors.email?.message}</p></label>

            <label htmlFor="pass">
            Password : <input id="pass" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
            type="password" placeholder="Enter password" {...register("password")}/>
            <p style={{ color: 'red', fontStyle: 'italic', marginTop: '4px' }}>{errors.password?.message}</p></label>

            <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 active:bg-blue-800  transition-colors cursor-pointer" 
            type="submit">Register</button>
        </div>
        </form><br></br>
        <p className="text-center">Already have an account!   <Link className="text-blue-700" to="/login">Login</Link></p>
        </div>
     );
    }
export default Register;