import React, { useEffect } from "react";

// CRA uses process.env.REACT_APP_* for env vars
const signupUrl = process.env.REACT_APP_SIGNUP_URL || "http://localhost:3000";

function Signup() {
  useEffect(() => {
    // Redirect to signup page dynamically
    const timer = setTimeout(() => {
      window.location.replace(signupUrl);
    }, 500); // small delay for UX

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center mt-5">
      <div className="spinner-border text-primary mb-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h2>Redirecting to Signup...</h2>
      <p className="text-muted">Please wait while we take you to the signup page.</p>
    </div>
  );
}

export default Signup;
