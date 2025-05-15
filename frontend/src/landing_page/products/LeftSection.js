import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemolink,
  learnMorelink,
  googlePlaylink,
  appStorelink,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 ">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div>
            <a href={tryDemolink}>Try Demo</a>
            <a href={learnMorelink} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            {" "}
            <a href={googlePlaylink}>
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStorelink}>
              {" "}
              <img src="media\images\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
