import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom";


function Signup()
{
    const [formdata,setFormData]=useState({});
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();

    function handleChange(e)
    {
        setFormData({
            ...formdata,
            [e.target.id]:e.target.value,
        }

        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const res = await fetch("http://localhost:3001/auth/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formdata),
            });
    
            // if (!res.ok) {
            //     throw new Error(`HTTP error! Status: ${res.status}`);
            // }
    
            const data = await res.json();
            if(data.success===false)
            {
                setError(data.message);
                setLoading(false);
                return;
            }
            setLoading(false);
            setError(null);
            navigate("/sign-in");
            console.log(data);
        } catch (error) {
            // console.error('Error during fetch:', error.message);
            setLoading(false);
            setError(error.message);
            

        }
    };


    // const handleSubmit=async(e)=>
    // {
    //     e.preventDefault();
    //     const res=await fetch("http://localhost:3001/auth/signup",{
    //         method:'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify(formdata),
    //     })
    //     const data=await res.json();
    //     console.log(data);
    // }
    
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex  flex-col gap-4">
                <input type="text" placeholder="username" id="username" className="border rounded-lg p-3" onChange={handleChange}/>
                <input type="email" placeholder="email" id="email" className="border rounded-lg p-3" onChange={handleChange}/>
                <input type="password" placeholder="password" id="password" className="border rounded-lg p-3" onChange={handleChange}/>
                <button disabled={loading} className="bg-slate-700 text-white rounded-lg hover:opacity-95 p-2 uppercase">{loading?"Loading...":"Sign Up"}</button>
            </form>
            <div className="flex gap-3 my-3">
                <p>Have an account?</p>
                <Link to="/sign-in">
                    <span className="text-blue-700">Sign in</span>
                </Link>
            </div>
         {error && <p className="text-red-500">{error}</p>}
        </div>

    )

    
 }

export default Signup;