import React from 'react';

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left: Image */}
        <div className="col-md-6 col-12 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="education"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* Right: Text */}
        <div className="col-md-6 col-12">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="/"
            className="mx-2 mx-md-5 d-inline-block"
            style={{ textDecoration: "none" }}
          >
            Varsity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-4 mt-md-5">
            Trading Q&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="/"
            className="mx-2 mx-md-5 d-inline-block"
            style={{ textDecoration: "none" }}
          >
            Trading Q&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
