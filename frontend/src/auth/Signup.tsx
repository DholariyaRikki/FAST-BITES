// importings some elements and providings path to the pages and for linking purpose
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import {  Loader2, LockKeyhole, Mail, PhoneIcon, User } from "lucide-react";
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
// its for taking input from login page.
type SignupInputState = {
    fullname:string;
    email: string;
    password: string;
    contact:string;
}






const Signup = () => {
    const [input, setInput] = useState<SignupInputState>({
        fullname:"",
        email: "",
        password: "",
        contact:"",
    });
    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }
    const loginSubmitHandler=(e:FormEvent)=>{
        e.preventDefault();
        console.log(input);
        
    }
    // loading come true if false is submitted,like viaversa
    const loading = false;
    return (
        <div className=" flex item-center justify-center ">
            <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg   md:border border-gray-200 mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">FAST-BITES</h1>
                </div>
                {/* 1n */}
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Full Name"
                            name="fullname"
                            value={input.fullname}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"

                        />
                        <   User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />

                    </div>
                </div>
                
                {/* 1e */}
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"

                        />
                        <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />

                    </div>
                </div>
                {/* 1p */}
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    </div>
                </div>
                {/* 2p */}
                <div className="mb-4">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Contact"
                            name="contact"
                            value={input.contact}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <PhoneIcon className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
                    </div>
                </div>
                <div className="mb-10">
                    {

                        loading ? <Button disabled className="w-full bg-orange-500 hover:bg-hoverOrange"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button> :

                            (

                                <Button type="submit" className="w-full bg-orange-500 hover:bg-hoverOrange">Signup</Button>
                            )
                    }
                </div>
                <Separator />
                <p className="mt-2">
                    Already have an account?{" "}
                    <Link to="/Login" className="text-blue-500">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;