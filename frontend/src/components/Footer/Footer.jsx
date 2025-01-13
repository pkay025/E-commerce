import React from "react";
import Banner from "../../assets/product/footer-pattern.jpg";
import footerLogo from "../../assets/logo.png";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Blogs",
    link: "/#blogs",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Shop",
    link: "/#shop",
  }
];


const Footer = () => {
  return (
    <div style={BannerImg}
    className="text-white mb-20">
      <div className="container">
        <div 
        data-aos="zoom-in"
        className="grid md:grid-cols-3 pb-45 pt-5">
          {/*Company details*/}
          <div className="py-8 px-4">
            <h1
            
            className="
            sm:text-3xl text-xl font-bold sm:text-left
            text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt=""
              className="max-w-[60px]" />
              UniQ
            </h1>
            <p>An innovative e-commerce
            platform designed to offer a
            curated selection of unique, 
            high-quality products and services.</p>
          </div>
          {/*Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3
          col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1
                className="sm:text-2xl text-xl font-bold
                sm:text-left text-justify mb-3">
                  Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {
                      FooterLinks.map((link) => (
                        <li 
                        className="cursor-pointer
                        hover:text-secondary hover:translate-x-1duration-300
                        text-gray-200"
                        key={link.title}>

                          <span>{link.title}</span>
                        
                        </li>
                      ))
                    }
                  </ul>
              </div>
            </div>


            <div>
              <div className="py-8 px-4">
                <h1
                className="sm:text-2xl text-xl font-bold
                sm:text-left text-justify mb-3">
                  Quick Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {
                      FooterLinks.map((data) => (
                        <li 
                        className="cursor-pointer
                        hover:text-secondary hover:translate-x-1 duration-300
                        text-gray-200"
                        key={data.title}>

                          <span>{data.title}</span>
                          
                          
                        </li>
                      ))
                    }
                  </ul>
              </div>
            </div>
            {/* Socail link */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a> 
                 <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3"    >
                <FaLocationArrow />
                <p>University Of Ghana, Legon</p>
                </div>
                <div className="flex items-center gap-3">
                <FaMobileAlt />
                  <p>+233 257 676 119</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer
