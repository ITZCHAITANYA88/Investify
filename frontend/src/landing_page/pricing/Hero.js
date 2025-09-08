import React from "react";

function Hero() {
  return (
    <div className="container">
      
      {/* Heading Section */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing Cards */}
      <div className="row p-3 p-md-5 mt-5 text-center">
        
        {/* Equity Delivery */}
        <div className="col-12 col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="equity" />
          <h1 className="fs-3 fw-normal mt-3">Free equity delivery</h1>
          <p className="text-muted mt-2">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        {/* Intraday & F&O */}
        <div className="col-12 col-md-4 p-4">
          <img src="media/images/intradayTrades.svg" alt="intraday" />
          <h1 className="fs-3 fw-normal mt-3">Intraday and F&O trades</h1>
          <p className="text-muted" style={{ fontSize: "1rem", lineHeight: "1.8" }}>
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades 
            across equity, currency, and commodity. Flat ₹20 on all option trades.
          </p>
        </div>

        {/* Mutual Funds */}
        <div className="col-12 col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="pricing" />
          <h1 className="fs-3 fw-normal mt-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
