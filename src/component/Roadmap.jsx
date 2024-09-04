
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/Roadmap.css"

const Roadmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in",
      once: true,
    });
    AOS.refresh(); // Ensure AOS refreshes to catch all elements
  }, []);

  return (
<>

<div className=' Roadmap-head'       data-aos="fade-up"
 data-aos-anchor-placement="top-bottom"> 
  <h1> Roadmap</h1>
  <p> The Road Ahead JASMY's Vision for the Future</p>
</div>


<div className='roadmap' id='roadmap'  data-aos="zoom-in">  
  <div className='class'>  
    <div className="class1">
  <h1>  Q1 </h1>
  <div>  

 <ul>
<li> Conceptualized the utility token model</li>
<li> Established the core team </li>
<li> Conducted research and feasibility studies</li>


<li> Initial design of the JASMY platform</li>


 </ul>
  </div>
</div>

<div className='line1'></div>

<div className="class2">
  <h1>  Q2 </h1>
  <div>  

 <ul>
<li> Conceptualized the utility token model</li>
<li> Established the core team </li>
<li> Conducted research and feasibility studies</li>


<li> Initial design of the JASMY platform</li>


 </ul>
  </div>
</div>
<div className='line2'></div>


<div className="class3">
  <h1>  Q3 </h1>
  <div>  

 <ul>
<li> Conceptualized the utility token model</li>
<li> Established the core team </li>
<li> Conducted research and feasibility studies</li>


<li> Initial design of the JASMY platform</li>


 </ul>
  </div>
</div>
<div className='line3'></div>


<div className="class4">
  <h1>  Q4</h1>
  <div>  

 <ul>
<li> Conceptualized the utility token model</li>
<li> Established the core team </li>
<li> Conducted research and feasibility studies</li>


<li> Initial design of the JASMY platform</li>


 </ul>
  </div>
</div>
<div className='line4'></div>

<div className="class5">
  <h1>  Q5</h1>
  <div>  

 <ul>
<li> Conceptualized the utility token model</li>
<li> Established the core team </li>
<li> Conducted research and feasibility studies</li>


<li> Initial design of the JASMY platform</li>


 </ul>
  </div>
</div>

<div className='line5'></div>




</div>

</div>
</>
  )
}

export default Roadmap