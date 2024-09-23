import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";

import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginInputState>>({});
  const { loading, login } = useUserStore();
  const navigate = useNavigate();

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginInputState>);
      return;
    }
    try {
      await login(input);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1601050694979-0d9b23a6cc02")', // Replace with any image link you want
      }}
    >
      {/* Dark Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Centered Form */}
      <form
        onSubmit={loginSubmitHandler}
        className="relative z-10 md:p-8 w-full max-w-md rounded-lg bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg md:border border-gray-300 mx-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in"
      >
        <div className="mb-4 text-center">
          <h1 className="font-bold text-4xl text-orange-500">Fast-Bites</h1>
          <p className="text-lg text-gray-600 mt-1">
            Delicious food delivered to your door.
          </p>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300"
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {errors && (
              <span className="text-xs text-red-500">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300"
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {errors && (
              <span className="text-xs text-red-500">{errors.password}</span>
            )}
          </div>
        </div>
        <div className="mb-10">
          {loading ? (
            <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-orange hover:bg-hoverOrange transform hover:scale-105 transition-transform duration-300"
            >
              Login
            </Button>
          )}
          <div className="mt-4 text-center">
            <Link
              to="/forgot-password"
              className="hover:text-blue-500 hover:underline transition-all duration-300"
            >
              Forgot Password
            </Link>
          </div>
        </div>
        <Separator />
        <p className="mt-2 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 hover:text-blue-700 hover:underline transition-all duration-300"
          >
            Signup
          </Link>
        </p>
      </form>

      
    </div>
  );
};

export default Login;
