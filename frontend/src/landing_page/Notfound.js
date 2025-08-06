import React from 'react';
import { Link } from 'react-router-dom';


function NotFound() {
    return ( 
        <>
            <div className="container p-5 text-center" style={{ paddingTop: '100px' }}>
                <h2 className="text-muted">404</h2>
                <h1 className="fw-bold mb-3 text-muted">Kiaan couldn’t find that page</h1>
                <p className="text-muted mb-4">We couldn’t find the page you were looking for.</p>
                <Link to="/" className="btn btn-link fs-5 text-decoration-none">
                    Visit Zerodha’s home page
                </Link>
        </div>
        </>

    );
}

export default NotFound;
