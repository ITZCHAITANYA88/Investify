import React from "react";

function Footer() {
  const linkStyle = {
    textDecoration: "none",
    display: "block",
    marginBottom: "8px"
  };

  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)", borderTop: "1px solid #dee2e6" }}>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "60%" }}
              alt="logo"
            />

            <p className="mt-3 text-muted" style={{ fontSize: "12px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd.<br /> All rights reserved.
            </p>
            <div className="d-flex flex-column gap-2 mt-3">
              <div className="d-flex gap-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-x-twitter fa-lg text-muted"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook fa-lg text-muted"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram fa-lg text-muted"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-lg text-muted"></i>
                </a>
              </div>
              <div className="d-flex gap-3 mt-3">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube fa-lg text-muted"></i>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp fa-lg text-muted"></i>
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-telegram fa-lg text-muted"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <h5>Company</h5>
            <a href="/" className="text-muted" style={linkStyle}>About</a>
            <a href="/" className="text-muted" style={linkStyle}>Products</a>
            <a href="/" className="text-muted" style={linkStyle}>Pricing</a>
            <a href="/" className="text-muted" style={linkStyle}>Referral programme</a>
            <a href="/" className="text-muted" style={linkStyle}>Careers</a>
            <a href="/" className="text-muted" style={linkStyle}>Zerodha.tech</a>
            <a href="/" className="text-muted" style={linkStyle}>Press & media</a>
            <a href="/" className="text-muted" style={linkStyle}>Zerodha cares (CSR)</a>
          </div>

          <div className="col">
            <h5>Support</h5>
            <a href="/" className="text-muted" style={linkStyle}>Contact</a>
            <a href="/" className="text-muted" style={linkStyle}>Support portal</a>
            <a href="/" className="text-muted" style={linkStyle}>Z-Connect blog</a>
            <a href="/" className="text-muted" style={linkStyle}>List of charges</a>
            <a href="/" className="text-muted" style={linkStyle}>Downloads & resources</a>
          </div>

          <div className="col">
            <h5>Account</h5>
            <a href="/" className="text-muted" style={linkStyle}>Open an account</a>
            <a href="/" className="text-muted" style={linkStyle}>Fund transfer</a>
            <a href="/" className="text-muted" style={linkStyle}>60 day challenge</a>
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
