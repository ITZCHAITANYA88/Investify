import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h2 className="fs-2 mb-4">To create a ticket, select a relevant topic</h2>

        {/* Example Column */}
        <div className="col-12 col-md-6 col-lg-4 p-4 mb-4">
          <h5>
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h5>
          <a
            href="https://support.zerodha.com/category/account-opening/resident-individual"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Online Account Opening
          </a>
          <br />
          <a
            href="https://support.zerodha.com/category/account-opening/resident-individual"
            style={{ textDecoration: "none", lineHeight: "2.5" }}
          >
            Offline Account Opening
          </a>
          <br />
          {/* ... other links */}
        </div>

        {/* Duplicate this col for other sections */}
        <div className="col-12 col-md-6 col-lg-4 p-4 mb-4">
          <h5>
            <i className="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
          </h5>
          {/* Links here */}
        </div>

        <div className="col-12 col-md-6 col-lg-4 p-4 mb-4">
          <h5>
            <i className="fa fa-bar-chart" aria-hidden="true"></i> Trading & Platforms
          </h5>
          {/* Links here */}
        </div>

        {/* Continue the rest... */}
      </div>
    </div>
  );
}

export default CreateTicket;
