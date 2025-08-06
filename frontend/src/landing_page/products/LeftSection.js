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
      <div className="row">
        <div className="col-6" style={{ textAlign: "left"}}>
          <img src={imageURL} alt="imageurl"/>
        </div>
        <div className="col-2 mr-7"></div>
        <div className="col-4 ml-5 p-3 mt-5">
            <h1 className="mb-3 fs-3 ">{productName}</h1>
            <p className="text-muted" style={{ width: "95%", fontSize: "1rem", lineHeight: "1.8", marginBottom: "15px", }}>
                {productDesription}
            </p>
          <div>
            <a href={tryDemo} style={{textDecoration: "none" }}>Try Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none" }}>
              Learn More
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="playbadge"/>
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
                alt="appstore"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;