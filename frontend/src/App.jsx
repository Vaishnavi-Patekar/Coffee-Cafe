import React, {use, useEffect} from 'react';
import AOS from "aos" ;
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import Banner from './components/Banner.jsx';
import Appstore from './components/Appstore.jsx';
import Testimonial from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  useEffect(()=>{
    AOS.init(
      {
      offset:100,
      duration:700,
      easing: "ease-in",
      delay: 100,
    
      }
    );
  });
  return (
    <div className="overflow-x-hidden"> 
    <Navbar />
    <Home />
    <Services />
    <Banner />
    <Appstore />
    <Testimonial />
    <Footer />
    
    </div>
    
  )
}

export default App