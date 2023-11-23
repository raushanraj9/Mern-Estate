import React from "react";
import {Link} from "react-router-dom";

function Signup()
{

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form className="flex  flex-col gap-4">
                <input type="text" placeholder="username" id="username" className="border rounded-lg p-3" />
                <input type="email" placeholder="email" id="email" className="border rounded-lg p-3" />
                <input type="password" placeholder="password" id="password" className="border rounded-lg p-3" />
                <button className="bg-slate-700 text-white rounded-lg hover:opacity-95 p-2">Sign Up</button>
            </form>
            <div className="flex gap-3 my-3">
                <p>Have an account?</p>
                <Link to="/sign-in">
                    <span className="text-blue-700">Sign in</span>
                </Link>
            </div>

        </div>

    )

    
 }

export default Signup;