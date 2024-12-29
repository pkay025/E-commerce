import React from "react";
import lightmode from "../../assets/website/lightmode.png";
import darkmode from "../../assets/website/darkmode.png";


const DarkMode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme")? localStorage.getItem("theme") :
     "light");

     const element = document.documentElement;
     console.log(element);

     React.useEffect(() => {
       localStorage.setItem("theme", theme);
       if (theme === "dark") {
         element.classList.add("dark");
         element.classList.add("dark");
       } else {
         element.classList.remove("light");
         element.classList.remove("dark");
       }
     }, [theme]);
     
  return (
  <div className="relative">
      <img 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      src={lightmode}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10
             ${theme === "dark" ? "opacity-0" : "opacity-100" } transition-all duration-300`}
      />
      <img 
       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      src={darkmode}
        alt=""
        className={`w-12 cursor-pointer }`}/>
    </div>
  );
};

export default DarkMode;
