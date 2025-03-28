import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import LoginSignup from "./components/loginSignup";

function App() {
  
  

  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/> <Home/></>
    },
    {
      path:"/login",
      element:<> <Navbar/> <LoginSignup/></>
    },
    {
      path:"/Home",
      element: <> <Navbar/> <Home/></>
    },
  ]) 

  

  return (
    <>

<RouterProvider router = {router} />
      
    </>
  );
}

export default App
