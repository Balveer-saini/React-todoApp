import React from "react"
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
        <nav className="flex justify-between bg-slate-900 text-white py-4">
            <div className="logo">
                <span className="font-bold text-xl mx-9">iTask</span>
            </div>
            
            <ul className="flex gap-8 mx-9">
               <Link to="/Home"> <li className="cursor-pointer hover:font-bold transition-all duration-75">Home</li></Link>
                <li className="cursor-pointer hover:font-bold transition-all duration-75">Your task</li>
                <Link to="/login">              
                <li className="cursor-pointer hover:font-bold transition-all duration-75" >Login/Sign Up</li></Link>
            </ul>
        </nav>
        </>
    )
} 

export default Navbar