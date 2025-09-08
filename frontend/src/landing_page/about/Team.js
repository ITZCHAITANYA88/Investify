import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Section Heading */}
      <div className="row p-3 border-top">
        <h2 className="text-center">People</h2>
      </div>

      {/* Content */}
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        {/* Left Side: Image + Name */}
        <div className="col-md-6 col-12 p-3 text-center mb-4 mb-md-0">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width: "60%", maxWidth: "250px" }}
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <h6>Founder, CEO</h6>
        </div>

        {/* Right Side: Bio */}
        <div className="col-md-6 col-12 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a
              href="https://nithinkamath.me/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="https://tradingqna.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/Nithin0dha"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
