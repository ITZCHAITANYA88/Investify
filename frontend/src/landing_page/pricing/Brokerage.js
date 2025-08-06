import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        {/* Left Column */}
        <div className="col-6 p-4">
          <a
            href="https://zerodha.com/brokerage-calculator#tab-equities"
            style={{ textDecoration: "none" }}
          >
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2", fontSize: "14px" }}
            className="text-muted"
          >
            <li>Call & Trade and RMS auto-squareoff: ₹50 + GST per order</li>
            <li>Digital contract notes will be sent via e-mail</li>
            <li>
              Physical copies of contract notes: ₹20 per note + courier charges
            </li>
            <li>
              NRI Account (non-PIS): 0.5% or ₹100 per order (whichever is lower)
            </li>
            <li>
              NRI Account (PIS): 0.5% or ₹200 per order (whichever is lower)
            </li>
            <li>
              Orders with debit balance: ₹40 per order instead of ₹20
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="col-6 p-4">
          <a
            href="https://zerodha.com/brokerage-calculator#tab-equities"
            style={{ textDecoration: "none" }}
          >
            <h3 className="fs-5">List of charges</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2", fontSize: "14px" }}
            className="text-muted"
          >
            <li>Equity Delivery: ₹0</li>
            <li>Equity Intraday: ₹20 or 0.03% per executed order (whichever is lower)</li>
            <li>Equity Futures: ₹20 or 0.03% per order</li>
            <li>Equity Options: Flat ₹20 per executed order</li>
            <li>Currency & Commodity: ₹20 or 0.03% per order</li>
            <li>AMC (Demat): ₹300 per year</li>
            <li>Account Opening Fee: ₹200 for equity, ₹100 for commodity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
