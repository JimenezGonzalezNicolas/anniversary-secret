import React from 'react';
import './assets/css/styles.css';
import Cards from './components/cards.tsx';
import Carousel from './components/carousel.tsx';
import Footer from './components/footer.tsx';
import Letter from './components/letter.tsx';
import Navbar from './components/navbar.tsx';
import Slider from './components/slider.tsx';


function App() {
  return (
    <>
    <Navbar/>
    <div className="w-full h-auto">
    <Slider/>
    <Cards/>
    <Letter/>
    <Carousel/>
    </div>
   
    <Footer/>
    </>
  );
}

export default App;
