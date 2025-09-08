import React from "react";

// CRA uses process.env.REACT_APP_* instead of import.meta.env
const frontendUrl =
  process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        {/* Blog link */}
        <h4
          style={{
            fontWeight: "350",
            marginTop: "40px",
            marginBottom: "60px",
          }}
        >
          Want to know more about our technology stack? Check out the{" "}
          <a href={frontendUrl} style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </h4>

        {/* Section heading */}
        <h3 style={{ fontWeight: "450" }}>The Zerodha Universe</h3>
        <p className="text-muted mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Partner cards section (placeholder) */}
        <div className="row g-4 justify-content-center mb-5">
          {/* Example card - replace with real ones */}
          <div className="col-10 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Smallcase</h5>
                <p className="card-text text-muted">
                  Curated baskets of stocks for long-term investing.
                </p>
                <a href={frontendUrl} className="stretched-link">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Streak</h5>
                <p className="card-text text-muted">
                  Backtest and deploy trading strategies without coding.
                </p>
                <a href={frontendUrl} className="stretched-link">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Signup button */}
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary fs-5 px-4 py-2 mb-5">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
