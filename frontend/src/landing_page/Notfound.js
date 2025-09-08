import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <h1 className="display-1 fw-bold text-muted">404</h1>
      <h2 className="mb-3 text-secondary">Page not found</h2>
      <p className="text-muted mb-4">
        We couldn’t find the page you were looking for.
      </p>
      <Link to="/" className="btn btn-primary px-4 py-2 fs-5">
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
