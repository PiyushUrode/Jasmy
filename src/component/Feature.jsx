import React from "react";
import "../style/Feature.css";
import img1 from "../images/icon-a.svg";
import img2 from "../images/icon-b.svg";
import img3 from "../images/icon-c.svg";
import img4 from "../images/icon-d.svg";

import arrow from "../images/arrow.svg";

const Feature = () => {
  return (
    <>
      <div className="feature" id="feature">
        <h1 className="feature-h1"> Features</h1>
        <h2 className="feature-h2">
          {" "}
          Key Features of Jasmy Token Development{" "}
        </h2>

        <div className="card-features">
          <div className="cardA">
            <div className="box1">
              <div className="box-a">

                <h1> Secure Token Architecture </h1>
                <h3>
                JASMY offers robust security protocols to ensure that your tokens are protected against threats, providing peace of mind for businesses and users alike.
                </h3>
                <div className="featureimg2">
                <img src={img2} alt="/" />
                </div>

              </div>
              <img src={arrow} alt="" id="arrow1" />
            </div>
          </div>
          <div className="cardb">
            <div className="box2">
              <div className="box-b">
                <div className="featureimg2">

                <img src={img1} alt="/" />
                </div>
                <h1> Scalable Solutions </h1>
                <h3>
                  Designed to grow with your business, JASMY's token development
                  platform can easily scale to meet increasing demands without
                  compromising performance or efficiency.
                </h3>
              </div>
              <img src={arrow} alt="" id="arrow2" />
            </div>
            <div className="box3">
              <div className="box-c">
                <div className="featureimg">

                <img src={img4} alt="/" />
                </div>
                <h1> User-Friendly Interface</h1>
                <h3>
                JASMY's platform is designed with simplicity in mind, offering an intuitive interface that makes token management easy for both technical and non-technical users.
                </h3>
              </div>
              <img src={arrow} alt="" id="arrow3" />
            </div>
          </div>
          <div className="cardc">
            <div className="box4">
              <div className="box-d">

                <h1> Efficient Transaction Processing</h1>
                <h3>
                Experience fast and reliable transaction processing with JASMY, optimized for high-volume digital ecosystems, ensuring smooth and seamless operations.
                </h3>
                <div className="featureimg">

                <img src={img3} alt="/" />
                </div>
              </div>
              <img src={arrow} alt="" id="arrow4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
