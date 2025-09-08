import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="py-4 px-1 ms-5 d-flex flex-wrap align-items-center justify-content-between" id="supportWrapper">
        <h1 className="m-0">Support Portal</h1>
        <a
          href="https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details"
          className="btn btn-primary"
        >
          <i className="fa fa-ticket me-2" aria-hidden="true"></i> My Tickets
        </a>
      </div>

      <div className="row px-5 py-4 mx-5" id="heroContent">
        {/* Left Column */}
        <div className="col-12 col-md-6 mb-4">
          <h2 className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h2>

          <div className="search-bar mb-4">
            <input
              type="text"
              placeholder="Eg. how do I activate F&O"
              className="form-control"
            />
          </div>

          <div className="quick-links d-flex flex-wrap gap-3">
            <a href="https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details">
              Track account opening
            </a>
            <a href="https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details">
              Track segment activation
            </a>
            <a href="https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details">
              Intraday margins
            </a>
            <a href="https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details">
              Kite user manual
            </a>
          </div>
        </div>

        <div className="col-12 col-md-2"></div>

        {/* Right Column */}
        <div className="col-12 col-md-4">
          <h1 className="fs-4 mb-4">Featured</h1>
          <ol className="featured-links pe-3">
            <li>
              <a
                href="https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details"
                style={{ textDecoration: "none" }}
              >
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a
                href="https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details"
                style={{ textDecoration: "none" }}
              >
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
