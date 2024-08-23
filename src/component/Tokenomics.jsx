import React from "react";
import "../style/Tokennomics.css";
import token1 from "../images/token1.png";
import copy from "../images/copy.svg";
import Buttongradient from "../component/Map1";

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
            <Buttongradient text1="Token" text2="Arzona Token" />{" "}
          </div>

          <div className="details1">
            {" "}
            <Buttongradient text1="Network" text2="BEP-20" />{" "}
          </div>


          <div className="details1">
            {" "}
            <Buttongradient text1="Total Supply" text2="50 Billion" />{" "}
          </div>

          <div className="details1">
            {" "}
            <Buttongradient text1="Decimal" text2="18" />{" "}
          </div>

          <div className="details1">
            {" "}
            <Buttongradient text1="Symbol" text2="JASMY" />{" "}
          </div>




        </div>


        <div className="contract">
          <h1 className="contract-h1">
            Contract Address  :- 
          </h1>
          <h1 className="contract-h1">01234567A8B0C4D8E5F44R844RRW54FE64</h1>
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
