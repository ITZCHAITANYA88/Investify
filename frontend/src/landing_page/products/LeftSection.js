import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        {/* Left image column */}
        <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Right content column */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="mb-3 fs-3">{productName}</h1>
          <p
            className="text-muted"
            style={{
              width: "95%",
              fontSize: "1rem",
              lineHeight: "1.8",
              marginBottom: "15px",
            }}
          >
            {productDesription}
          </p>

          {/* Links */}
          <div className="mb-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "30px", textDecoration: "none" }}
            >
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Store badges */}
          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ marginLeft: "20px", maxHeight: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
