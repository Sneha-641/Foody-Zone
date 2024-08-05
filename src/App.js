import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import HomeBanner from './pages/HomeBanner';
import CustomSlider from './pages/CustomSlider';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <HomeBanner/>
      <CustomSlider/>
      <Footer/>
    </>
  );
}

export default App;
