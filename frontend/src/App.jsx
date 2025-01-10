import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Products from "./components/Navbar/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/Navbar/TopProducts/TopProducts";
import Banner from "./components/Navbar/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";


const App = () => {
    
  React.useEffect(() => { 
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  AOS.refresh();
}, []);
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      
    </div>
  );
};

export default App;
