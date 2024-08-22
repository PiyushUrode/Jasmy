import React from "react";
import "../style/Presale.css"
import img1 from "../images/headercircle.svg"

const Presale = () => {
  return (
    <>
      <div className="Presale">
        <div className="Presale-left">

          {/* <div className="Presale-left-a"> 

          <div className="buynow">

                   <button type="submit" id="buynow1" className="bg-custom-gradient ">
            {" "}
            Connect Wallet
          </button>
          </div>


          <div className="price">
            <div className="pricea">
              <h1> Listing Price</h1>
              <h1> $0.20</h1>
            </div>
            <div className="priceb">
              <a
                target="_blank"
                href="https://icons8.com/icon/99982/right-arrow"
              >
                Arrow
              </a>{" "}
              icon by <a target="_blank" href="https://icons8.com"></a>
            </div>
            <div className="pricec">
              <h1> Listing Price</h1>
              <h1> $0.20</h1>
            </div>
          </div>

          <div className="buttons">
            <h1>Buywith</h1>
            <button type="submit" id="btns1" className=" ">
              {" "}
              USDT
            </button>
            <button type="submit" id="btns" className=" ">
              {" "}
              BUYNOW USDT
            </button>
            <h1> You Will Get</h1>
            <button type="submit" id="btns" className="">
              {" "}
              Jasmy
            </button>
          </div>
          <div className="buynow">
          <button type="submit" id="buynow1" className="bg-custom-gradient ">
            {" "}
            Approve
          </button>
          </div>
 <div className="buynow">
 <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNGRjNEMDAiIGQ9Ik00My4yLDMzLjljLTAuNCwyLjEtMi4xLDMuNy00LjIsNGMtMy4zLDAuNS04LjgsMS4xLTE1LDEuMWMtNi4xLDAtMTEuNi0wLjYtMTUtMS4xYy0yLjEtMC4zLTMuOC0xLjktNC4yLTRDNC40LDMxLjYsNCwyOC4yLDQsMjRjMC00LjIsMC40LTcuNiwwLjgtOS45YzAuNC0yLjEsMi4xLTMuNyw0LjItNEMxMi4zLDkuNiwxNy44LDksMjQsOWM2LjIsMCwxMS42LDAuNiwxNSwxLjFjMi4xLDAuMywzLjgsMS45LDQuMiw0YzAuNCwyLjMsMC45LDUuNywwLjksOS45QzQ0LDI4LjIsNDMuNiwzMS42LDQzLjIsMzMuOXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjAgMzFMMjAgMTcgMzIgMjR6Ij48L3BhdGg+Cjwvc3ZnPg=="
            />
          <button type="submit" id="buynow1" className="bg-custom-gradient ">
            {" "}
           {" "}
            How To Buy Jasmy Coin{" "}
          </button>
  
          </div>
          </div> */}


<div className="relative w-full max-w-md mx-auto p-6 rounded-lg shadow-lg  ">
  {/* Background Blur Layer */}
  <div className="absolute inset-0   bg-gradient-to-r from-blue-600 to-blue-800  opacity-20 rounded-lg backdrop-blur-lg"></div>
  {/* 
  bg-presalebg1
  bg-gradient-to-r from-blue-600 to-blue-800
  */}

  {/* Content */}
  <div className="relative z-10 space-y-6 text-white text-center " id="connectwallet"  > {/* Centering text */}
    {/* Connect Wallet */}
    <button className="bg-custom-gradient text-white py-2 px-4 rounded-lg border-2 border-blue-500 hover:border-white hover:shadow-lg transition-all duration-300">
      Connect Wallet
    </button>

    {/* Prices */}
    <div className=" flex flex-row justify-center  items-center gap-6">
      <div className="flex justify-center items-center text-base font-semibold  gap-2">
        <h2>Listing Price:</h2>
        <h2 className="text-blue-200">$0.20</h2>
      </div>

      <div className="flex justify-center items-center text-base font-semibold gap-2">
      <span>→</span> 
      </div>

      <div className="flex justify-center items-center text-base font-semibold gap-2">
          <h2 className="text-blue-200">Next Price: </h2>
          <h2 className="text-blue-200">$0.20</h2>
      </div>


      {/* <div className="flex justify-center items-center text-lg font-semibold" >
        <span>→</span> 
      
      </div>
      <div className="flex justify-center items-center text-lg font-semibold  " >
      
        <h2 className="text-blue-200">Next Price: $0.40</h2>
      </div> */}
    </div>

    {/* Buy with */}
    <div className="space-y-2">
      <h2>Buy With</h2>
      <button className="flex items-center justify-end gap-4 w-full py-2 px-4 bg-white text-black rounded-lg shadow-md">
        USDT
        <img src="usdt-icon-url" alt="USDT" className="w-5 h-5"/>
      </button>
    </div>

    {/* You Will Get */}
    <div className="space-y-2">
      <h2>You Will Get</h2>
      <button className="flex items-center justify-end gap-4 w-full py-2 px-4 bg-white text-black rounded-lg shadow-md">
        Jasmy
        <img src="jasmy-icon-url" alt="Jasmy" className="w-5 h-5"/>
      </button>
    </div>

    {/* Approve Button */}
    <button className="bg-custom-gradient text-white py-2 px-4 rounded-lg border-2 border-blue-500 hover:border-white hover:shadow-lg transition-all duration-300">
      Approve
    </button>

    {/* How To Buy */}
    <div className="flex justify-center items-center space-x-2 mt-4">
      <img src="youtube-icon-url" alt="YouTube" className="w-6 h-6"/>
      <button className="text-sm text-blue-400 ">How To Buy VOIP Coins</button>
    </div>
  </div>
</div>





        </div>




        <div className="Presale-right ">
          <h1 className="Presale-right-h1"> Jasmy Presale</h1>
          <p className="Presale-right-p">
            {" "}
            Dont miss your chance to be an early adopter of JASMY tokens ! Our
            presale offers exclusive access to our utility tokens at a
            discounted rate , providing you with the opportunity to join a
            revolutionary platform that is transforming digital services .
            Secure your tokens now and become part of the next generation of
            digital innovation with JASMY.{" "}
          </p>

          <button type="submit" id="buynow" className="bg-custom-gradient">
              {" "}
              Connect Wallet
            </button>

        </div>
      </div>
    </>
  );
};

export default Presale;
