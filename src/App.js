import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import HomeBanner from './pages/HomeBanner';
import CustomSlider from './pages/CustomSlider';
import Footer from './pages/Footer';
import Newsletter from './pages/Newsletter';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Publications from './pages/Publications';
import Menu from './pages/Menu';

function App() {
  return (
    <>
      <Navbar/>
      <HomeBanner/>
      <CustomSlider/>
      <About/>
      <Menu/>
      <Gallery/>
      <Publications/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
