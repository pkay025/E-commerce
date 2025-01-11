import React from "react";
import Banner from "../../assets/product/footer-pattern.jpg";
import footerLogo from "../../assets/logo.png";






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
        <div className="grid md:grid-cols-3 pv-45 pt-5">
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
            high-quality products and services. Specializing in exclusive items
            that cater to diverse tastes, UniQ provides a seamless shopping 
            experience for customers seeking originality and individuality. 
            With an intuitive user interface, secure payment options, and personalized 
            recommendations, UniQ stands out as the go-to destination for shoppers looking to express their unique style 
            or discover one-of-a-kind treasures.</p>
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
                  <ul>
                    {
                      FooterLinks.map((data) => (
                        <li key={data.title}>
                          <a href={data.link} className="hover:text-secondary duration-200">
                            {data.title}
                          </a>
                        </li>
                      ))
                    }
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer
