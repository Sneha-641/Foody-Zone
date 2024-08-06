import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import HomeBanner from './pages/HomeBanner';
import CustomSlider from './pages/CustomSlider';
import Footer from './pages/Footer';
import Newsletter from './pages/Newsletter';
import CustomflowSlider from './pages/CustomflowSlider';

function App() {
  return (
    <>
      <Navbar/>
      <HomeBanner/>
      <CustomSlider/>
      <CustomflowSlider/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
