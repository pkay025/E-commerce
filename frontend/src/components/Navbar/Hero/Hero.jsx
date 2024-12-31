import Image1 from "../../../assets/product/1.png";
import Image2 from "../../../assets/category/gaming.png";
import Image3 from "../../../assets/product/r-5.png"; 
import Slider from "react-slick";

const ImageList = [ 
    {
        id: 1,
        img: Image1,
        title: "Up to 50% OFF for Asus Zenbook 14",
    },
    {
        id: 2,
        img: Image2,
        title: "Up to 30% OFF for Playstation 5 pro",
    },
    {
        id: 3,
        img: Image3,
        title: "Up to 70% OFF for Hp Pavilion 15",
    },
 
 ];

const Hero = () => {
  const handleOrderPopup = () => {
    // Define the function logic here
    console.log("Order Now button clicked");
  };
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px]
    sm:min-h-[650px] bg-gray-100 flex justify-center
    items-center dark:bg-gray-950 dark:text-white
    duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/20 
      absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10"></div>
            {ImageList.map((data) => (
                <div key={data.id}>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
            {ImageList.map((data) => (
                <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 
                  sm:pt-0 text-center sm:text-left order-2 
                  sm:order-1 relative z-10">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl
                   font-bold">
                    {data.title}
                   </h1>
                   <p className="text-sm">
                    {data.description}
                   </p>
          
                  <div>
                      <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-secondary
                      to-tertiary hover:scale-105 
                      duration-200 text-white py-2 px-4
                      rounded-full"
                      >
                        Order Now
                      </button>
                      </div>
                  </div>
                  {/* image section */}
                 <div className="order-1 sm:order-2">
                      <div className="relative z-10">
                      <img
                      src={data.img} alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] 
                      sm:w-[450px] sm:scale-125 lg:scale-125 
                      object-contain mx-auto"
                    />
                  </div>
              </div>    
          </div>    
          </div>
            ))}
 </Slider>
    </div>
    </div>
    ))}
    </div>
  );
};

export default Hero;
  