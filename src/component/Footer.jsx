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

<footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="Jasmy" />
                    <p>Empowering digital innovation with secure, scalable utility tokens. Join JASMY on the journey to the future.</p>
                </div>
                <div className="footer-links">
                    <div>
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Jasmy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Teams</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="social-media">
                  <h1 className='social-media-h1'> Follow Us :- </h1>
                  <img src={social1} alt="" id='footer-icon' />
                  <img src={social2} alt=""  id='footer-icon'/>
                  <img src={social3} alt="" id='footer-icon'/>
                  <img src={social4} alt="" id='footer-icon'/>
                  <img src={social5} alt="" id='footer-icon'/>

                </div>
                <div className="legal-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Sales and Refunds</a>
                    <a href="#">Legal</a>
                    <a href="#">Site Map</a>
                </div>
                <p>© 2024 All Rights Reserved</p>
            </div>
        </footer>

   {/* <div className="footer">
    <div className='sectiona'> 
    <div className='section1'>
  <div className='logo'> 
  <img src={logo} alt="" />
  
  </div>
        <p>Empowering digital innovation with secure, scalable utility tokens. Join JASMY on the journey to the future</p>
    </div>
    </div>

    <div className="sectiona">
    <div className='section3'> 
    <h1 className='sectionheader'>Resources </h1>
<h3 className='section-container'>Jasmy</h3>

    </div>
    </div>

    <div className="sectiona"> 
    <div className='section4'>
    <h1 className='sectionheader'> About US </h1>
<h3 className='section-container'>Carrer </h3>
<h3 className='section-container'>Faq </h3>
<h3 className='section-container'> Terms </h3>
<h3 className='section-container'> Contact us </h3>
    </div>
    </div>
    </div> */}
   

   {/* <div className='follow'>
    <h1> Follow Us</h1>
    <div className='socialmedia-icon'>
      <img src={social1} alt="" />
      <img src={social2} alt="" />
      <img src={social3} alt="" />
      <img src={social4} alt="" />
      <img src={social5} alt="" />

    </div>
   </div> */}

   {/* <div className='footer-2'>

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
   </div> */}
   </>
  )
}

export default Footer