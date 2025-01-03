import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Products from "./components/Navbar/Products/Products";
import AOS from "aos";

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
    </div>
  );
};

export default App;
