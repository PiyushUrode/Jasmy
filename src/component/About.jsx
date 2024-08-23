import React from "react";
import "../style/About.css";
import  img1 from"../images/about1.svg"
const About = () => {
  return (
    <div className="About-section" id="about">

        
      <h1 className="About-section-h1"> What is Jasmy ?</h1>
      <p className="About-section-p">About Jasmy Empowering Digital Transformation</p>
        <div className="About-section-left"> 
      <div className="About-section-1">
        <p>
          JASMY is a pioneering platform for utility token development,
          providing secure, efficient, and scalable solutions tailored to modern
          digital ecosystems. Our mission is to empower businesses with
          innovative tokens that enhance service delivery, optimize operations,
          and drive growth in the evolving digital landscape. Join us in shaping
          the future of utility tokens.
        </p>


      </div>
     


      <div className="About-section-right">

        <img src={img1} alt="" />
      </div>
    </div>
      {/* <div className='blurblack'></div> */}
    </div>
  );
};

export default About;
