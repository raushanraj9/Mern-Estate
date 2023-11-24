import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
    // State to store form data
    const [formdata, setFormData] = useState({});
    // State to handle error messages
    const [error, setError] = useState(null);
    // State to track loading state during form submission
    const [loading, setLoading] = useState(false);
    // React Router's hook for navigation
    const navigate = useNavigate();

    // Function to handle changes in form inputs
    function handleChange(e) {
        setFormData({
            ...formdata,
            [e.target.id]: e.target.value,
        });
    }

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Sending a POST request to the backend for user sign-in
            const res = await fetch("http://localhost:3001/auth/signin", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formdata),
            });

            // Parsing the response
            const data = await res.json();

            // Handling response data
            if (data.success === false) {
                setError(data.message);
                setLoading(false);
                return;
            }

            // Resetting state and navigating to the home page on successful sign-in
            setLoading(false);
            setError(null);
            navigate("/");
            console.log(data);
        } catch (error) {
            // Handling errors during the fetch operation
            setLoading(false);
            setError(error.message);
        }
    };

    // JSX for the Signin component
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
            {/* Sign-in form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="email" placeholder="email" id="email" className="border rounded-lg p-3" onChange={handleChange} />
                <input type="password" placeholder="password" id="password" className="border rounded-lg p-3" onChange={handleChange} />
                <button disabled={loading} className="bg-slate-700 text-white rounded-lg hover:opacity-95 p-2 uppercase">
                    {loading ? "Loading..." : "Sign In"}
                </button>
            </form>
            {/* Link to the sign-up page */}
            <div className="flex gap-3 my-3">
                <p>New User? </p>
                <Link to="/sign-up">
                    <span className="text-blue-700">Create an account</span>
                </Link>
            </div>
            {/* Displaying error messages, if any */}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}

export default Signin;






