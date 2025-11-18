import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Ourstory from "./components/Ourstory";
import Locations from "./components/Locations";
import Franchise from "./components/Franchise";
import Joinourteam from "./components/Joinourteam";
import Contact from "./components/Contact";

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="gki">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/our-story" element={<Ourstory />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/join-our-team" element={<Joinourteam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App
