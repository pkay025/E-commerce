import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Products from "./components/Navbar/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/Navbar/TopProducts/TopProducts";
import Banner from "./components/Navbar/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";





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
    <div className="bg-white dark:bg-gray-900 dark:text-white
    durartion-200">
      <Navbar handleOrderPopup={setOrderPopup} />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Footer />
      <Popup orderPopup={orderPopup} 
      setOrderPopup={setOrderPopup} />
      
      
      
    </div>
  );
};

export default App;
