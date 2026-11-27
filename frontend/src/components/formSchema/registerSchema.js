import {z} from "zod";

export const registerSchema=z.object({
    name: z.string().min(3,"*name should contain minimum of 3 characters"),
    age: z.coerce.number().min(18,"*minimum age should be 18"),
    email: z.string().email("*enter a valid email"),
    password: z.string().min(8,"*password should contain minimum of 8 characters")
})