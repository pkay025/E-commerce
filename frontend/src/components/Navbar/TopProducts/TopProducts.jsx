import React from "react";
import Image1 from "../../../assets/product/p_img50.png";
import Image2 from "../../../assets/product/shirt2.png";
import Image3 from "../../../assets/product/p_img47.png";
import Image4 from "../../../assets/product/p_img43.png";

import { FaStar } from "react-icons/fa";  

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Kid's short",
        description: "Made from super-soft and durable material",
    },
    {
        id: 2,
        img: Image2,
        title: "Printed shirt",
        description: "Made from high-quality material and also comfortable and durable.",
    },
    {
        id: 3,
        img: Image3,
        title: "Stylish Hoodie trouser",
        description: "Elevate your loungewear game with our ultra-comfortable hoodie trouser.",
    },
    {
        id: 4,
        img: Image4,
        title: "Kid's jeans",
        description: "Our kid's jeans are designed to provide a comfortable and stylish fit for your little ones.",
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
            <div>
                {/* image section */}
               
                <div>
                    <img src={data.img} alt="" />
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
