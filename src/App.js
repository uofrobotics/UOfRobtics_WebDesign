import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import About from '../src/pages/About'; // About page
import Events from '../src/pages/Events'; // Events page
import Projects from '../src/pages/Projects'; // Projects page

import Navbar from './components/Navbar';
import '../src/components/Components_css/App.css';


function App() {
  return (
   
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
  );
}

export default App;
