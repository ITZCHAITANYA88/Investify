import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(250, 250, 250)",
        borderTop: "1px solid #dee2e6",
      }}
    >
      <div className="container mt-5 pt-5">
        <div className="row gy-4">
          {/* Logo + Socials */}
          <div className="col-md-3">
            <img
              src="/media/images/logo.svg"
              style={{ width: "60%" }}
              alt="Company Logo"
            />

            <p className="mt-3 text-muted" style={{ fontSize: "12px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd.
              <br /> All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="d-flex flex-wrap gap-3 mt-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-x-twitter fa-lg text-muted"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook fa-lg text-muted"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram fa-lg text-muted"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin fa-lg text-muted"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube fa-lg text-muted"></i>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp fa-lg text-muted"></i>
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <i className="fab fa-telegram fa-lg text-muted"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted d-block">About</a></li>
              <li><a href="/" className="text-muted d-block">Products</a></li>
              <li><a href="/" className="text-muted d-block">Pricing</a></li>
              <li><a href="/" className="text-muted d-block">Referral programme</a></li>
              <li><a href="/" className="text-muted d-block">Careers</a></li>
              <li><a href="/" className="text-muted d-block">Zerodha.tech</a></li>
              <li><a href="/" className="text-muted d-block">Press & media</a></li>
              <li><a href="/" className="text-muted d-block">Zerodha cares (CSR)</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted d-block">Contact</a></li>
              <li><a href="/" className="text-muted d-block">Support portal</a></li>
              <li><a href="/" className="text-muted d-block">Z-Connect blog</a></li>
              <li><a href="/" className="text-muted d-block">List of charges</a></li>
              <li><a href="/" className="text-muted d-block">Downloads & resources</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-md-3">
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted d-block">Open an account</a></li>
              <li><a href="/" className="text-muted d-block">Fund transfer</a></li>
              <li><a href="/" className="text-muted d-block">60 day challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Text */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            For complaints write to complaints@zerodha.com (broking), or
            dp@zerodha.com (DP). Read the Risk Disclosure Document prescribed
            by SEBI | ICF.
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with brokers. Receive transaction info
            directly from Exchange. KYC is one-time with SEBI registered
            intermediaries. If subscribing to an IPO, no need for cheques —
            funds remain in your bank account in case of non-allotment."
          </p>
          <p>
            We don’t give stock tips or authorize anyone to trade on your
            behalf. If you find such cases, please create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
