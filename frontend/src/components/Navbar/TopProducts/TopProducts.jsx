import React from "react";
import Image1 from "../../../assets/category/macbook.png";
import Image2 from "../../../assets/product/r-5.png";
import Image3 from "../../../assets/category/speaker.png";
import Image4 from "../../../assets/product/6.png";
import Image5 from "../../../assets/category/gaming.png";
import Image6 from "../../../assets/product/2.png";


import { FaStar } from "react-icons/fa";  

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Macbook Air",
        description: "The Macbook Air is a powerful, compact, and feature-rich laptop for productivity, creativity, and entertainment on the go.",
    },
    {
        id: 2,
        img: Image2,
        title: "Dell Pavilion 15 Notebook PC",
        description: "The Dell Pavilion 15 is a powerful, compact, and feature-rich laptop for productivity, creativity, and entertainment on the go.",
    },
    {
        id: 3,
        img: Image3,
        title: "Bluetooth Speaker",
        description: "Speaker for better sound experience.",
    },
    {
        id: 4,
        img: Image4,
        title: "Apple Watch Series 8",
        description: "Smart Watches for better experience.",
    },
    {
        id: 5,
        img: Image5,
        title: "Play Station 4 slim",
        description: "Gaming console for entertainment and fun.",
    },
    {
        id: 6,
        img: Image6,
        title: "Power Pack ",
        description: "The Power Pack is a portable battery pack that provides you with the power you need to keep your devices running smoothly and efficiently.",
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
                    transform -translate-y-5 group-hover:scale-110 duration-200"/>
                </div>
                 {/* details section */}
                 <div className="p-4 text-center">
                    {/* Star rating section */}
                    <div className="w-full flex items-center justify-center
                    gap-1">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                    </div>
                    <h1 className="text-xl font-bold">{data.title}</h1>
                    <p className="text-sm text-gray-500 group-hover:text-slate-400">{data.description}</p>
                 </div>
            </div>
            ))}
        </div>
       </div>
    </div>
  );
};

export default TopProducts;
