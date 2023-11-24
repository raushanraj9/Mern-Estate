// Import React and required hooks/components from React Router
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Functional component for Signup
function Signup() {
    // State for form data, error, and loading indicator
    const [formdata, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Function to handle input changes and update form data
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
            // Send a POST request to the backend for user signup
            const res = await fetch("http://localhost:3001/auth/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formdata),
            });

            // Parse the response
            const data = await res.json();

            // Handle response data
            if (data.success === false) {
                setError(data.message);
                setLoading(false);
                return;
            }

            // Clear error and loading state, and navigate to the sign-in page
            setLoading(false);
            setError(null);
            navigate("/sign-in");
            console.log(data);
        } catch (error) {
            // Handle any errors during the fetch operation
            setLoading(false);
            setError(error.message);
        }
    };

    // JSX for the Signup component
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex  flex-col gap-4">
                {/* Input fields for username, email, and password */}
                <input type="text" placeholder="username" id="username" className="border rounded-lg p-3" onChange={handleChange} />
                <input type="email" placeholder="email" id="email" className="border rounded-lg p-3" onChange={handleChange} />
                <input type="password" placeholder="password" id="password" className="border rounded-lg p-3" onChange={handleChange} />
                {/* Submit button with loading indicator */}
                <button disabled={loading} className="bg-slate-700 text-white rounded-lg hover:opacity-95 p-2 uppercase">
                    {loading ? "Loading..." : "Sign Up"}
                </button>
            </form>
            {/* Link to the sign-in page */}
            <div className="flex gap-3 my-3">
                <p>Have an account?</p>
                <Link to="/sign-in">
                    <span className="text-blue-700">Sign in</span>
                </Link>
            </div>
            {/* Display error message if there is an error */}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}

// Export the Signup component
export default Signup;



