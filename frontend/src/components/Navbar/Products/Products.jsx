import React from 'react'
import Image1 from "../../../assets/product/p-2.jpg";
import Image2 from "../../../assets/product/p_img1.png";
import Image3 from "../../../assets/product/p-3.jpg";
import Image4 from "../../../assets/product/p_img21.png";
import Image5 from "../../../assets/product/p_img14.png";
import Image6 from "../../../assets/product/p_img27.png";
import Image7 from "../../../assets/product/Wireless Charger.png";
import Image8 from "../../../assets/product/Iphones.png";
import Image9 from "../../../assets/product/JBL Wireless Speaker.png";
import Image10 from "../../../assets/product/5.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Apple Series 6 Watch",
        rating: 7.5,
        color: "Aqua",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Image2,
        title: "Women Ethnic Wear",
        rating: 7.6,
        color: "White",
        aosDelay: "200",
       
    },
    {
        id: 3,
        img: Image3,
        title: "Wireless Headphone",
        rating: 8.8,
        color: "White",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Image4,
        title: "Women Western Dress", 
        rating: 7.5,
        color: "Gray",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Image5,
        title: "Boys Wear",
        rating: 8.6,
        color: "White",
        aosDelay: "800",
       
    },
    {
        id: 6,
        img: Image6,
        title: "Girls Wear",
        rating: 9.3,
        color: "Gray",
        aosDelay: "1000",
    },
    {
        id: 7,
        img: Image7,
        title: "Apple Wireless charger",
        rating: 8.5,
        color: "Black",
        aosDelay: "1200",
    },
    {
        id: 8,
        img: Image8,
        title: "Iphone X",
        rating: 9.6,
        color: "Black & White",
        aosDelay: "1400",
    },
    {
        id: 9,
        img: Image9,
        title: "JBL Wireless Speaker",
        rating: 9.8,
        color: "Black",
        aosDelay: "1600",
    },
    {
        id: 10,
        img: Image10,
        title: "Phone Cases",
        rating: 9.5,
        color: "Gray",
        aosDelay: "1800",
    },
    
]


const Products = () => {
  return ( <div>
    <div className="mt-14 mb-12">
    <div className="container">
    {/*Header section*/}
    <div className="text-center mb-10 max-w-[600px] mx-auto">
    <p data-aos="fade-up" className="text-sm text-secondary">Top Selling Products for you</p>
    <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
    <p data-aos="fade-up" className="text-xs text-gray-500">
    Experience the ultimate blend of style and 
    functionality with our top-selling products.This is where you can find the 
    best products for yourself and your loved ones.</p>
    </div>
    </div>
     {/*Body section*/}
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-3
         md:grid-cols-4 lg:grid-cols-5 place-items-center
         gap-5">
            {/*Product Card*/}
            {ProductsData.map((data) => (
                    <div
                    data-aos="fade-up"
                    data-aos-delay= {data.aosDelay}
                    key={data.id}
                    className="space-y-3"
                    
                    >
                     <img src={data.img} alt="" 
                     className="h-[220px] w-[150px]
                     object-cover rounded-md"

                     />   
                    <div>
                       <h3 className="font-semibold">{data.title}</h3>
                       <p className="text-sm text-gray-600">{data.color}</p>
                       <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400"></FaStar>
                            <span>{data.rating}</span>
                       </div>
                    </div>             
                </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  
  );
};

export default Products;
