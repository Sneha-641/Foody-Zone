import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import HomeBanner from './pages/HomeBanner';
import CustomSlider from './pages/CustomSlider';
import Footer from './pages/Footer';
import Newsletter from './pages/Newsletter';
import CustomflowSlider from './pages/Gallery';
import About from './pages/About';
import Publications from './pages/Publications';

function App() {
  return (
    <>
      <Navbar/>
      <HomeBanner/>
      <CustomSlider/>
      <About/>
      <CustomflowSlider/>
      <Publications/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
