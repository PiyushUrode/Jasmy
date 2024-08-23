import React from 'react'
import '../style/Header.css'
import img1 from "../images/Logo-01.svg"
import img2 from "../images/Logo-02.svg"
import img3 from "../images/Logo-03.svg"
import img4 from "../images/Logo-04.svg"
import img5 from "../images/Logo-05.svg"
import video1 from "../video/headervideo.mp4"
const Header = () => {
  return (
    <>
    <div className='header' id='home'>
    <div>
            {/* <video className='video-background'
                
                
                autoplay
                loop
                muted
                src={video1}
            /> */}
            
        </div>

        <div className='header-content'> 
            
     <h1 className='h1'> Welcome to Jasmy Token</h1>
     <h2 className='h2'> Unlock The Potential of Utility Tokens With Jasmy </h2>
     <p className='p'>Welcome to JASMY, your gateway to innovative utility token development. Empower your digital ecosystem with secure, scalable solutions designed to enhance services and drive future-focused growth.</p>
        </div>
        <div className='header-button'>
          <div className='header-buynow'>

            <button type="submit" id='buynow' className='bg-custom-gradient '> BuyNow</button>
          </div>

          <div className='header-whitepaper'>

            <button type="submit" id='whitepaper'> White Paper</button>
          </div>
        </div>


        <div className='blurblack1'>
        <div className='images-5'>
          <img src={img1} alt="/img1" />
          <img src={img2} alt="/img2" />
          <img src={img3} alt="/img3" />
          <img src={img4} alt="/img4" />
          <img src={img5} alt="/img5" />

        </div>
        </div>

        <div className='backshadow2'></div>


    </div>


        </>
  )
}

export default Header