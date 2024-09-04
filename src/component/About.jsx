// About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import "../style/About.css"; // Import your CSS file for styles
import img1 from "../images/about1.svg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in",
      once: true,
    });
    AOS.refresh(); // Ensure AOS refreshes to catch all elements
  }, []);
  
 
  return (
    <div className="About-section" id="about" data-aos="fade-up" 
    data-aos-anchor-placement="top-bottom"
    >
      <h1 className="About-section-h1">What is Jasmy?</h1>

      <p className="About-section-p">
        About Jasmy: Empowering Digital Transformation
      </p>

      <div className="About-section-left" >
        <div className="About-section-1" data-aos="fade-right"   >
          <p>
            JASMY is a pioneering platform for utility token development,
            providing secure, efficient, and scalable solutions tailored to
            modern digital ecosystems. Our mission is to empower businesses with
            innovative tokens that enhance service delivery, optimize
            operations, and drive growth in the evolving digital landscape. Join
            us in shaping the future of utility tokens.
          </p>
        </div>

        <div className="About-section-right" data-aos="fade-left">
          <img src={img1} alt="Jasmy" />
        </div>
      </div>
    </div>
  );
};

export default About;
