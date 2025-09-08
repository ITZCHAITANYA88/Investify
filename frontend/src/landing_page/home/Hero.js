import React from 'react';

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        {/* Responsive image */}
        <img 
          src="media/images/homeHero.png" 
          alt="Hero_Image" 
          className="mb-5 img-fluid" 
          style={{ maxWidth: "600px", margin: "0 auto" }}
        />

        <h1 className="mt-4 fw-bold">Invest in everything</h1>
        <p className="text-muted fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>

        {/* Responsive button */}
        <div className="d-flex justify-content-center">
          <button 
            className="p-2 btn btn-primary fs-5 mb-5 w-75 w-md-50 w-lg-25"
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
