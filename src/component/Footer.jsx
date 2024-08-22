import React from 'react'
import "../style/Footer.css"
import logo from "../images/logo.svg"
import social1 from "../images/social1.svg"
import social2 from "../images/social2.svg"
import social3 from "../images/social3.svg"
import social4 from "../images/social4.svg"
import social5 from "../images/social5.svg"
const Footer = () => {
  return (
   <>
   <div className="footer">
    <div className='section1'>
  <div className='logo'> 
  <img src={logo} alt="" />
  
  </div>
        <p>Arzona pioneers AI technology, creating immersive worlds to redefine digital exploration and inspire future innovation.</p>
    </div>
    <div className='section2'>
<h1 className='sectionheader'>Use Cases</h1>
<h3 className='section-container'>Eco system </h3>
<h3 className='section-container'>Farm Design </h3>
<h3 className='section-container'>AI Mining System In future </h3>

    </div>
    <div className='section3'> 
    <h1 className='sectionheader'>Resources </h1>
<h3 className='section-container'>Jasmy</h3>

    </div>
    <div className='section4'>
    <h1 className='sectionheader'> About US </h1>
<h3 className='section-container'>Carrer </h3>
<h3 className='section-container'>Faq </h3>
<h3 className='section-container'> Terms </h3>
<h3 className='section-container'> Contact us </h3>
    </div>
   </div>

   <div className='follow'>
    <h1> Follow Us</h1>
    <div className='socialmedia-icon'>
      <img src={social1} alt="" />
      <img src={social2} alt="" />
      <img src={social3} alt="" />
      <img src={social4} alt="" />
      <img src={social5} alt="" />

    </div>
   </div>

   <div className='footer-2'>

    <div className='footer-a'>
      <h1> Privacy Policy</h1>
<h1> Terms of Use </h1>
<h1> Sales And Refund</h1>
<h1> Legal </h1>
<h1> SiteMap</h1>

      </div>  
 

    <div className='footer-b'>
<h1>@2024 All Right Reserved</h1>
      </div>  
   </div>
   </>
  )
}

export default Footer