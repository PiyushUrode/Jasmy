
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/Tokennomics.css";
import token1 from "../images/token1.png";
import copy from "../images/copy.svg";
import Buttongradient from "../component/Map1";
import Button3 from "../component/Button3"

const Tokenomics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh(); // Ensure AOS refreshes to catch all elements
  }, []);

  return (
    <>
      <div className="tokenomics" id="tokenomics"       data-aos="fade-up"  data-aos-anchor-placement="top-bottom"  data-aos-duration="1000">
        <h1 className="token-h1"> Tokenomics</h1>
        <h2 className="token-h2"> Exploring JASMY's Tokenomics Structure </h2>
        <img src={token1} alt=""       data-aos="zoom-in"  data-aos-easing="linear"
        />
        <div className="details" data-aos="zoom-in"  data-aos-easing="linear" data-aos-duration="1100">
          <div className="details1">
            {" "}
            <Button3 leftText="Token" rightText="Arzona Token" />{" "}
          </div>

          <div className="details1">
            {" "}

            <Button3 leftText="Network" rightText="BEP-20" />{" "}
          </div>


          <div className="details1">
            {" "}

            <Button3 leftText="Total Supply" rightText="50 Billion" />{" "}
            
          </div>

          <div className="details1">
            {" "}

            <Button3 leftText="Decimal" rightText="18" />{" "}
          </div>

          <div className="details1">
            {" "}

            <Button3 leftText="Symbol" rightText="JASMY" />{" "}
          </div>




        </div>


        <div className="contract" data-aos="zoom-in"  data-aos-easing="linear" data-aos-duration="1200"
        >
          <h1 className="contract-h1">
            Contract Address  :- 
          </h1>
          <h1 className="contract-h2"> 0x6b29043913cb352e82011551e388f510c1695e8c</h1>
          <div>
            <button type="button" id="contactbutton" >
              {" "}
              Copy <img src={copy} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
