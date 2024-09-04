import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './style/Home.jsx';
import Stages from './component/Stages.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stages" element={<Stages />} />
      </Routes>
    </Router>
  );
}

export default App;
