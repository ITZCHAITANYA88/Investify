import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Text first on large screens, second on small screens */}
        <div className="col-lg-6 order-2 order-lg-1 p-4">
          <h1 className="fs-3">{productName}</h1>
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
          <div className="text-start">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="col-lg-6 order-1 order-lg-2 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxHeight: "350px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
