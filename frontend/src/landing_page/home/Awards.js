import React from "react";

function Awards() {
  return (
    <div className="container p-4 p-md-5 mb-5">
      <div className="row align-items-center">
        {/* Left: Image */}
        <div className="col-md-6 col-12 p-3 text-center mb-4 mb-md-0">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "400px" }}
          />
        </div>

        {/* Right: Content */}
        <div className="col-md-6 col-12 p-3">
          <h1 className="fs-2">Largest stock broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds & Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
