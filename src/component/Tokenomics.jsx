import React from "react";
import "../style/Tokennomics.css";
import token1 from "../images/token1.png";
import copy from "../images/copy.svg";
import Buttongradient from "../component/Map1";
import Button3 from "../component/Button3"

const Tokenomics = () => {
  return (
    <>
      <div className="tokenomics" id="tokenomics">
        <h1 className="token-h1"> Tokenomics</h1>
        <h2 className="token-h2"> Exploring JASMY's Tokenomics Structure </h2>
        <img src={token1} alt="" />
        <div className="details">
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


        <div className="contract">
          <h1 className="contract-h1">
            Contract Address  :- 
          </h1>
          <h1 className="contract-h2">01234567A8B0C4D8E5F44R844RRW54FE64</h1>
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
