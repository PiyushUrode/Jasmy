// AnimatedComponent.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../style/Animate.css'; // Import the CSS file for animations

const Animatedcomponent = ({ children, animationClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5,    // Trigger when 50% of the element is visible
  });

  return (
    <>
    <div
      ref={ref}
      className={`animated-element ${inView ? animationClass : ''}`}
    >
      {children}
    </div>



    </>
  );
};

export default Animatedcomponent;
