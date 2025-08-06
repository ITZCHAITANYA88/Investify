import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
       <h4
            style={{
                fontWeight: "350",       // Less bold (normal)
                marginBottom: "160px",
                marginTop: "40px"    // Adds space below the heading
            }}
            >
            Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/" style={{textDecoration: "none"}}>Zerodha.tech</a> blog.
        </h4>
         <h3
            style={{
                fontWeight: "450",       // Less bold (normal)

            }}
            >
            The Zerodha Universe
        </h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="/media/images/zerodhaFundhouse.png" alt="smallcase" style={{ width: "60%", height: "auto" }}/>
            <p
                className="text-muted text-center mt-4"
                style={{
                    fontSize: "0.75rem",      // Small text (12px)
                    width: "60%",
                    lineHeight: "1.4",
                    margin: "0 auto",         // Centers the paragraph horizontally
                }}
                >
                Our asset management venture that is creating simple and transparent index
                funds to help you save for your goals.
            </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/sensibullLogo.svg" alt="smallcase" style={{ width: "60%", height: "auto" }}/>
            <p
                className="text-muted text-center mt-5"
                style={{
                    fontSize: "0.75rem",      // Small text (12px)
                    width: "70%",
                    lineHeight: "1.4",
                    margin: "0 auto",         // Centers the paragraph horizontally
                }}
                >
                Options trading platform that lets you
                create strategies, analyze positions, and examine
                data points like open interest, FII/DII, and more.

            </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/tijori.svg" alt="smallcase" style={{ width: "60%", height: "auto" }}/>
            <p
                className="text-muted text-center mt-2"
                style={{
                    fontSize: "0.75rem",      // Small text (12px)
                    width: "60%",
                    lineHeight: "1.4",
                    margin: "0 auto",         // Centers the paragraph horizontally
                }}
                >
                Investment research platform
                that offers detailed insights on stocks,
                sectors, supply chains, and more.
            </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/streakLogo.png" alt="smallcase" style={{ width: "60%", height: "auto" }}/>
            <p
                className="text-muted text-center mt-2"
                style={{
                    fontSize: "0.75rem",      // Small text (12px)
                    width: "60%",
                    lineHeight: "1.4",
                    margin: "0 auto",         // Centers the paragraph horizontally
                }}
                >
                Systematic trading platform
                that allows you to create and backtest
                strategies without coding.
            </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/smallcaseLogo.png" alt="smallcase" style={{ width: "60%", height: "auto" }}/>
            <p
                className="text-muted text-center mt-4"
                style={{
                    fontSize: "0.75rem",      // Small text (12px)
                    width: "60%",
                    lineHeight: "1.4",
                    margin: "0 auto",         // Centers the paragraph horizontally
                }}
                >
                Thematic investing platform
                that helps you invest in diversified
                baskets of stocks on ETFs.
            </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/media/images/dittoLogo.png" alt="smallcase" style={{ width: "50%", height: "auto" }}/>
            <p
                className="text-muted text-center mt-2"
                style={{
                    fontSize: "0.75rem",      // Small text (12px)
                    width: "50%",
                    lineHeight: "1.4",
                    margin: "0 auto",         // Centers the paragraph horizontally
                }}
                >
                Personalized advice on life
                and health insurance. No spam
                and no mis-selling.
            </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;