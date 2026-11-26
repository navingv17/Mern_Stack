import { useForm } from "react-hook-form";
import { registerSchema } from "../components/formSchema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
function Register() {
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(registerSchema)
    })
    const navigate=useNavigate();
function onSubmit1(data){
    console.log(data)
    alert("Successfully registered")
    navigate("/dashboard")
}    
    return ( 
        <div>
        <form onSubmit={handleSubmit(onSubmit1)}>
            <input type="text" placeholder="Enter your name" {...register("name")}/>
            <p>{errors.name?.message}</p>
            <input type=" number" placeholder="Enter your age" {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="email" placeholder="Enter email id" {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="password" placeholder="Enter password" {...register("password")}/>
            <p>{errors.password?.message}</p>
            <button type="submit">Register</button>
        </form>
        </div>
     );
    }
export default Register;