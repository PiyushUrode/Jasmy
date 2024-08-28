import React from 'react';
import Navbar from "../component/Navbar.jsx";
import Header from "../component/Header.jsx";
import Presale from "../component/Presale.jsx";
import About from "../component/About.jsx";
import Feature from "../component/Feature.jsx";
import Tokenomics from '../component/Tokenomics.jsx';
import Roadmap from '../component/Roadmap.jsx';
import Footer from "../component/Footer.jsx";

const Home = () => {
  return (
    <>

      <Header/>
      <Presale/>
      <About/>
      <Feature/>
      <Tokenomics/>
      <Roadmap/>
      <Footer/>
    </>
  );
}

export default Home;
