import {z} from "zod";

export const userSignupSchema = z.object({
    fullname:z.string().min(1,"fullname is required"),
    email:z.string().email("Invalid Email Address"),
    password: z.string().min(6," Password must be at least 6 characters"),
    contact:z.string().min(10,"contact number be 10 digit"),
});

export type SignupInputState = z.infer<typeof userSignupSchema>


export const userLoginSchema = z.object({
    email:z.string().email("Invalid Email Address"),
    password: z.string().min(6," Password must be at least 6 characters"),
});

export type LoginInputState = z.infer<typeof userLoginSchema>