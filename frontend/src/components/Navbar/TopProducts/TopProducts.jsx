import React from "react";
import Image1 from "../../../assets/product/shirt2.png";
import Image2 from "../../../assets/product/r-5.png";
import Image3 from "../../../assets/category/earphone.png";
import Image4 from "../../../assets/product/6.png";
import Image5 from "../../../assets/category/gaming.png";
import Image6 from "../../../assets/product/2.png";


import { FaStar } from "react-icons/fa";  

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Designed Shirt",
        description: "High-quality material and also comfortable and durable.",
    },
    {
        id: 2,
        img: Image2,
        title: "Dell Pavilion 15",
        description: "",
    },
    {
        id: 3,
        img: Image3,
        title: "Earphone",
        description: "",
    },
    {
        id: 4,
        img: Image4,
        title: "Smart Watches",
        description: "",
    },
    {
        id: 5,
        img: Image5,
        title: "Play Station 4 slim",
        description: "",
    },
    {
        id: 6,
        img: Image6,
        title: "Power Pack ",
        description: "",
    },
]

const TopProducts = () => {
  return (
    <div>
    <div className="container">
    {/* Header section */}
    <div className="text-center mb-10 max-w-[600px] mx-auto">
    <p data-aos="fade-up" className="text-sm text-secondary">
        Top Rated Products for you</p>
    <h1 data-aos="fade-up" className="text-3xl font-bold">
        Best Products</h1>
    <p data-aos="fade-up" className="text-xs text-gray-500">
    Discover the epitome of excellence with our carefully curated
    selection of best-in-class products. Meticulously designed and crafted
    with precision, these exceptional produts boast unparalleled performance
    durability, and style.
    </p>
    </div>
    {/* Body section */}
    <div className="grid grid-cols-1 sm:grid-cols-2
    md:grid-cols-3 gap-20 md:gap-5 place items-center">
        {
            ProductsData.map((data) => (
            <div 
            className="rounded-3xl bg-white
            dark:bg-gray-800 hover:bg-black/50
            dark:hover:bg-secondary hover:text-white
            relative shadow-xl duration-high group max-w-[300px]">
                {/* image section */}
               
                <div>
                    <img src={data.img} alt="" 
                    className="max-w-[140px] block mx-auto
                    transform -translate-y-5 group-hover:scale-110"/>
                </div>
                 {/* details section */}
            </div>
            ))}
        </div>
       </div>
    </div>
  );
};

export default TopProducts;
