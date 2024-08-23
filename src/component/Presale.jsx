import React from "react";
import "../style/Presale.css"
// import img1 from "../images/headercircle.svg"
import yt from "../images/presale/yt.svg"
import usdt from "../images/presale/usdt.svg"
import jasmy from "../images/presale/jasmy.svg"

const Presale = () => {
  return (
    <>
                  <div className='blurblack'></div>
      <div className="Presale">
        <div className="Presale-left">


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
    <div className=" flex  justify-center items-center gap-1 lg:gap-5  lg:flex-row  md:flex-row w-full sm:flex-row flex-wrap " >
      <div className="flex justify-center items-center text-base font-semibold  gap-2  ">
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
    <div className="space-y-2 ">
      <h2 className="flex items-center justify-start  ">Buy With</h2>
      <div className=" flex flex-col gap-4">

      <button className="flex items-center justify-center gap-1 w-1/2 lg:w-1/3  py-2 px-4 bg-white text-black rounded-lg shadow-md px-3">
        
        <img src={usdt} alt="USDT" className="w-5 h-5"/>
        <h1>USDT</h1>
      </button>
      <button className="flex items-center justify-end gap-4 w-full py-2 px-4 bg-white text-black rounded-lg shadow-md">
        USDT
        <img src={usdt} alt="USDT" className="w-5 h-5"/>
      </button>
      </div>
    </div>

    {/* You Will Get */}
    <div className="space-y-2">
      <h2 className="flex items-center justify-start" >You Will Get</h2>
      <button className="flex items-center justify-end gap-4 w-full py-2 px-4 bg-white text-black rounded-lg shadow-md">
        Jasmy
        <img src={jasmy} alt="Jasmy" className="w-5 h-5"/>
      </button>
    </div>

    {/* Approve Button */}
    <button className="bg-custom-gradient text-white py-2 px-4 rounded-lg border-2 border-blue-500 hover:border-white hover:shadow-lg transition-all duration-300">
      Approve
    </button>

    {/* How To Buy */}
    <div className="flex justify-center items-center space-x-2 mt-4">
      <img src={yt} alt="YouTube" className="w-6 h-6"/>
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
