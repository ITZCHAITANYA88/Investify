import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6 p-5" style={{ marginTop: "100px" }}>
          <h1 className="mt-5 fs-3">{productName}</h1>
          <p className="text-muted" style={{ width: "95%", fontSize: "1rem", lineHeight: "1.8", marginBottom: "15px", }}>{productDesription}</p>
         <div className="text-start">
            <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
        </div>

        </div>
        <div className="col-6">
          <img src={imageURL} alt="imageUrl"/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;