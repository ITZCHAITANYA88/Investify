import React from 'react';

function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-12 col-md-5 mb-4">
          <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency in India. 
            Flat fees and no hidden charges.
          </p>
          <a 
            href="/" 
            className="d-inline-block mt-3"
            style={{ textDecoration: "none" }}
          >
            See pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Spacer on large screens only */}
        <div className="d-none d-md-block col-md-1"></div>

        {/* Right Section */}
        <div className="col-12 col-md-6 mb-5">
          <div className="row text-center">
            <div className="col-12 col-sm-6 p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>Free equity delivery and <br /> direct mutual funds</p>
            </div>
            <div className="col-12 col-sm-6 p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
