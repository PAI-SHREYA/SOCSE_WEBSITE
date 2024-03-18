import React from 'react';
import { Footer } from '../Components/footer';
import './Home.css'; // Ensure the CSS file is named 'HomePage.css' and in the same directory
import image1 from '../pages/IMG_6661.png';
import image2 from '../pages/IMG_9925.png';
import image3 from '../pages/IMG_9991.png';   
export const Home = () => {
  return (


    <div className="home-container" id="home-container">
         <header className="home-header" id="home-header">
    <h1 id="home-title">Welcome to SOCSE</h1>
    <p id="home-subtitle">Explore. Learn. Connect.</p>
  </header>
      <section className="home-gallery" id="home-gallery">
      <h2 id="gallery-title">Gallery</h2>
      <div className="gallery-images" id="gallery-images">
        <img src={image1} alt="Gallery item 1" className="gallery-image" id="gallery-image-1" />
        <img src={image2} alt="Gallery item 2" className="gallery-image" id="gallery-image-2" />
        <img src={image3} alt="Gallery item 3" className="gallery-image" id="gallery-image-3" />
      </div>
    </section>
    <Footer/>
    </div>

   
   
    
  );
};
