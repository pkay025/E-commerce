import React from "react";
import Banner from "../../assets/product/orange-pattern.jpg";



const BannerImg = {
    backgroundImage: `url("${Banner}")`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

}
const Subscribe = () => {
  return (
    <div 
     data-aos="zoom-in"
     className="bg-gray-100 dark:bg-gray-800 text-white
     style={{BannerImg}}"
     >
      <div>
        <div className="container backdrop-blur-sm p-10">
            <h1>Get Notified About Latest Products</h1>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
