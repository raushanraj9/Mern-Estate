import React from "react";
import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

function Header()
{
  const {currentUser}=useSelector((state)=>state.user);

    return (
      <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center mx-auto max-w-6xl p-3">
            <Link to="/">
                 <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                    <span className="text-slate-400">Raushan</span>
                    <span className="text-slate-600">Estate</span>
                 </h1>
                 </Link>
            <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64"/>
                <FaSearch className="text-slate-600"/>
            </form>
            <ul className="flex space-x-3">
                <Link to="/">
                <li className="hidden sm:inline hover:underline text-slate-700">Home</li>
                </Link>
                <Link to="/about">
                <li className="hidden sm:inline hover:underline text-slate-700">About</li>
                </Link>
                <Link to="/profile">
                  {currentUser ?(<img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile"></img>): ( <li className="hover:underline text-slate-700">Sign In</li>)}
               
                </Link>
            </ul>
        </div>
      </header>

    )

    
 } 

export default Header;