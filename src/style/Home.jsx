import React from 'react'
import Navbar from "../component/Navbar.jsx";
import Header from "../component/Header.jsx";
import Presale from "../component/Presale.jsx";
import About from "../component/About.jsx";
import Feature from "../component/Feature.jsx";
import Tokenomics from '../component/Tokenomics.jsx';
import Roadmap from '../component/Roadmap.jsx';
import Footer from "../component/Footer.jsx";
// import Button from "../component/button.jsx";
import ButtonBlue from '../component/ButtonBlue.jsx';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Presale/>
    <About/>
    <Feature/>
    <Tokenomics/>
    <Roadmap/>
    {/* <Button/> */}
    <Footer/>
    <ButtonBlue/>

    
    
    
    </>
  )
}

export default Home