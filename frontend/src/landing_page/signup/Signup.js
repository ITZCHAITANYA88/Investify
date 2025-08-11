import React, { useEffect } from 'react';

function Signup() {
    useEffect(() => {
        // Redirect to your signup page when this component mounts
        window.location.href = "https://investify-1.onrender.com";
    }, []);

    return (
        <div className="text-center mt-5">
            <h2>Redirecting to Signup...</h2>
        </div>
    );
}

export default Signup;
