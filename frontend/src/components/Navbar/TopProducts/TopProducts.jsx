import React from "react";
import Image1 from "../../../assets/category/macbook.png";
import Image2 from "../../../assets/product/h-3.png";
import Image3 from "../../../assets/product/11.png";
import Image4 from "../../../assets/product/Series 8.png";
import Image5 from "../../../assets/category/gaming.png";
import Image7 from "../../../assets/product/PD.png";
import Image8 from "../../../assets/product/JBL headset.png";
import Image9 from "../../../assets/product/Network C6 Cables.png";
import Image6 from "../../../assets/product/2.png";


import { FaStar } from "react-icons/fa";  

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Macbook Air",
        description: "Powerful, compact, and feature-rich laptop for productivity, creativity, and entertainment on the go.",
    },
    {
        id: 2,
        img: Image2,
        title: "Dell Pavilion 15 Notebook",
        description: "Compact, and feature-rich laptop for productivity, creativity, and many more",
    },
    {
        id: 3,
        img: Image3,
        title: "JBL Bluetooth Speaker",
        description: "Speaker for better sound experience.",
    },
    {
        id: 4,
        img: Image4,
        title: "Apple Watch Series 8",
        description: "Smart Watches for better timing.",
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
        description: "Portable battery pack that provides you with the power you need to keep your devices running smoothly and efficiently.",
    },
    {
        id: 7,
        img: Image7,
        title: "Sandisk flashdrive",
        description: "Portable flash drive for data storage and transfer.",
    },
    {
        id: 8,
        img: Image8,
        title: "JBL Wireless headphone",
        description: "Wireless headphone for quality sound experience.",
    },
    {
        id: 9,
        img: Image9,
        title: "Network Category 6 Cable", 
        description: "Category 6 Cable for high-speed data transfer and connectivity.",
    }
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
            data-aos="zoom-in" 
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
                    <p className="text-gray-500 group-hover:text-slate-400 duration-300
                     text-sm line-clamp-2">
                        {data.description}
                        </p>
                        <button 
                        className="bg-secondary hover:scale-105
                        duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                         group-hover:text-secondary group-hover:border-2 group-hover:border-secondary">
                            Order Now
                        </button>
                 </div>
            </div>
            ))}
        </div>
       </div>
    </div>
  );
};

export default TopProducts;
