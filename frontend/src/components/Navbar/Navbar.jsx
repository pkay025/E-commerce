import { data } from "autoprefixer";
import React from "react";
import {IoMdSearch} from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";


const MenuLinks = [
    {
    id: 1,
    name: "Home",
    link: "/#",
    },
    {
    id: 2,
    name: "About",
    link: "/#about",
    },
    {
    id: 5,
    name: "Blogs",
    link: "/#blog",
    },
    {
     id: 4,
    name: "Contact",
    link: "/#contact",
    },
    {
    id: 6,
    name: "Shop",
    link: "/#shop",
    }
];

const DropdownLinks = [
    {
    id: 1,
    name: "Trending Products",
    link: "/#",
    },
    {
    id: 2,
    name: "Best Selling",
    link: "/#",
    },
    {
    id: 3,
    name: "Top Rated",
    link: "/#",
    },
];

const Navbar = () => {
  return (
  <div className="bg-white dark:bg-gray-900
  dark:text-white duration-200 relative z-40">
    <div className="py-4">
      <div className="container flex justify-between items-center">
        {/*Logo and Links section*/}
        <div className="flex items-center gap-4">
            <a href="#"
            className="text-primary font-semibold tracking-widest 
            text-2xl uppercase sm:text-3xl"
            >
            Numen
            </a>
            {/*Menu items*/}
            <div className="hidden lg:block">
                <ul className="flex items-center gap-4">
                    {
                        MenuLinks.map((data, index) => (
                            <li key={index}>
                                <a href={data.link}> 
                                {data.name}
                                </a>
                            </li>
                        ))} i
                        {/*Dropdown section*/}
                        <li className="relative cursor-pointer group">
                        <a href="#" className="flex items-center gap [2px] font-semibold
                            text-gray-500 dark:hover:text-white py-2">
                                Quick Links
                                <span>
                            <FaCaretDown className="group-hover:rotate-180
                             duration-300"/>
                            </span>
                        </a>
                        {/*Dropdown Links*/}
                        <div className="absolute z-[9999] hidden group-hover:block
                         w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black
                         dark:text-white ">
                            <ul className="space-y-3">
                                {
                                    DropdownLinks.map((data, index) => (
                                       <li>
                                        <a 
                                        className="text-gray-500
                                        dark:hover:text-white duration-200 inline-block w-full p-2
                                        hover:bg-primary/20 rounded-md font-semibold"
                                        href={data.link}>{data.name}</a>

                                       </li>
                                    ))
                                }
                            </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>

        {/*Navbar Right section*/}
        <div className="flex justify-between items-center">
           {/*Search Bar section*/}
            <div className="relative group hidden sm:block">
              <input type="text" 
              placeholder="Search"
              className="search-bar" />  
              <IoMdSearch className="text-xl
               text-gray-600
               group-hover:text-primary
               dark:text-gray-400 absolute top-1/2 
               -translate-y-1/2 right-3 duration-200"/>
            </div>
            {/*Order-button*/}
            <button className="relative p-3">
            <FaShoppingCart className="text-xl text-gray-600
             dark-text-gray-400" />
             <div className="w-4 h-4 bg bg-red-500 text-white 
             rounded-full absolute top-0 right-0 flex-items-center justify-center text-xs">

             </div>
            </button>
           {/*Dark mode section*/}
           <div>
           <DarkMode />
           </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Navbar;