import React from "react";
import BannerImg from "../../../assets/product/women.jpg";
import { GrSecure } from "react-icons/gr";
import { ToFastfood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div>
      <div className="min-h-[400px] flex justify-center 
      items-center py-12 sm:py-0">
        <div className="container"> 
          <div className="grid grid-cols-1 
          sm:grid-cols-3 md:grid-cols-2 gap-6 items-center">
            {/* image section */} 
            <div>
              <img src={BannerImg} alt="" className="" />
            </div>
            {/* text details section */} 
            </div> 
        </div>
      </div>
    </div>
  );
};

export default Banner;