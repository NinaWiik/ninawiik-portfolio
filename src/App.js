import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (    
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/p' element={<Pricing />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
