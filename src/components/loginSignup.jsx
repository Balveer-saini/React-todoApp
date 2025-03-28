import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];


    if (users.some(user => user.email === email)) {
      alert("User already exists! Please log in.");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup Successful! Please log in.");
    setEmail("");
    setPassword("");
    setIsSignup(false);
  };

  const handleLogin = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let userExists = users.find(user => user.email === email && user.password === password);

    if (userExists) {
      localStorage.setItem("loggedInUser", JSON.stringify(userExists));
      alert("Login Successful!");
      setTimeout(() => navigate("/Home"), 500);  
  } else {
    alert("Invalid email or password! Try again.");
  }
};

  return (
    <>
      <div className="flex flex-col mx-auto mt-24 bg-white pb-8 w-[500px] rounded-xl shadow-lg">
  <div className="flex flex-col items-center gap-2.5 w-full mt-7">
    <div className="text-4xl font-bold text-purple-800">
      {isSignup ? "Sign Up" : "Login"}
    </div>
    <div className="w-14 h-1 bg-purple-900 rounded-lg"></div>
  </div>

  <div className="mt-11 flex flex-col gap-4">
    {isSignup && (
      <div className="flex items-center mx-auto w-[370px] h-[65px] bg-gray-300 rounded-md px-4">
        <img src={user_icon} alt="" className="mr-6" />
        <input 
          type="text" 
          placeholder="Full Name" 
          className="h-[50px] w-full bg-transparent outline-none border-none text-gray-500 text-lg"
        />
      </div>
    )}

    <div className="flex items-center mx-auto w-[370px] h-[65px] bg-gray-300 rounded-md px-4">
      <img src={email_icon} alt="" className="mr-6" />
      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="h-[50px] w-full bg-transparent outline-none border-none text-gray-500 text-lg"
      />
    </div>

    <div className="flex items-center mx-auto w-[370px] h-[65px] bg-gray-300 rounded-md px-4">
      <img src={password_icon} alt="" className="mr-6" />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="h-[50px] w-full bg-transparent outline-none border-none text-gray-500 text-lg"
      />
    </div>
  </div>

  {!isSignup && (
    <div className="pl-16 mt-7 text-gray-500 text-lg">
      Lost Password? <span className="text-purple-800 cursor-pointer">Click here</span>
    </div>
  )}

  <div className="flex gap-8 mx-auto mt-14">
    <div
      className={`flex justify-center items-center w-48 h-[59px] text-white font-bold text-lg cursor-pointer rounded-full ${isSignup ? 'bg-purple-800' : 'bg-gray-300 text-gray-600'}`}
      onClick={handleSignup}
    >
      Sign Up
    </div>
    <div
      className={`flex justify-center items-center w-48 h-[59px] text-white font-bold text-lg cursor-pointer rounded-full ${!isSignup ? 'bg-purple-800' : 'bg-gray-300 text-gray-600'}`}
      onClick={handleLogin}
    >
      Login
    </div>
  </div>

  <div className="text-center mt-6 text-lg">
    {isSignup ? (
      <button>
        Already have an account? 
        <span className="text-purple-800 cursor-pointer" onClick={() => setIsSignup(false)}> Login here</span>
      </button>
    ) : (
      <button>
        Don't have an account? 
        <span className="text-purple-800 cursor-pointer" onClick={() => setIsSignup(true)}> Sign Up here</span>
      </button>
    )}
  </div>
</div>

    </>
  );
};

export default LoginSignup;
