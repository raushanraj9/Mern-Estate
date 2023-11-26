import React from "react";
import { useSelector } from "react-redux";

function Profile()
{
    const {currentUser}=useSelector(state=>state.user);
    

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
            <form className="flex flex-col gap-2">
                <img src={currentUser.avatar} alt="profile" className="rounded-full h-24 w-24 self-center cursor-pointer mt-2"></img>
                <input type="text" placeholder="username" id="username" className="border p-3 rounded-lg"></input>
                <input type="email" placeholder="email" id="email" className="border p-3 rounded-lg"></input>
                <input type="text" placeholder="password" id="password" className="border p-3 rounded-lg"></input>
                <button className="bg-slate-700 p-3 rounded-lg hover:opacity-90 uppercase text-white">Update</button>
            </form>
            <div className="flex justify-between mt-3">
                <span className="text-red-600 cursor-pointer">Delete account</span>
                <span className="text-red-600 cursor-pointer">Sign out</span>
            </div>
        </div>

    )

    
 }

export default Profile;