import React from 'react'
import "./app.css"
import Navbar from "./component/Navbar"
import Header from "./component/Header"
import Presale from "./component/Presale.jsx"
import About from "./component/About"
import Feature from "./component/Feature.jsx"
import Tokenomics from './component/Tokenomics'
import Footer from "./component/Footer.jsx"
import Roadmap from './component/Roadmap.jsx'
import Map1 from './component/Map1.jsx'

const App = () => {
  return (
<>
<Navbar/>
<Header/>
<Presale/>
<About/>
<Feature/>
<Tokenomics/>

<Roadmap/>
<Footer/>
<Map1/>
</>
  )
}

export default App