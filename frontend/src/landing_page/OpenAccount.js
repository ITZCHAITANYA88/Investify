import React from "react";

const signupUrl = process.env.REACT_APP_SIGNUP_URL || "/signup";

function OpenAccount() {
  return (
    <div className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mt-5">Open a Zerodha account</h1>
          <p className="text-muted fs-5">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <a
            href={signupUrl}
            className="btn btn-primary btn-lg mt-3 d-block mx-auto w-75 w-md-50 w-lg-25"
          >
            Sign up for free
          </a>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
