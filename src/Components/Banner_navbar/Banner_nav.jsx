import React from "react";

const Banner_nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  bg-red-500 py-5">
        <ul className="flex justify-end w-[1200px] mx-auto">
            <li className="mx-3"><a className="navbar-brand text-sm hover:text-gray-300 font-semibold transition-colors duration-300" href="#">SAVE MORE ON APP</a></li>
            <li className="mx-3"><a className="navbar-brand text-sm hover:text-gray-300 font-semibold transition-colors duration-300" href="#">BECOME A SELLER</a></li>
            <li className="mx-3"><a className="navbar-brand text-sm hover:text-gray-300 font-semibold transition-colors duration-300" href="#">HELP & SUPPORT</a></li>
            <li className="mx-3"><a className="navbar-brand text-sm hover:text-gray-300 font-semibold transition-colors duration-300" href="#">LOGIN</a></li>
            <li className="mx-3"><a className="navbar-brand text-sm hover:text-gray-300 font-semibold transition-colors duration-300" href="#">SIGN UP</a></li>
            <li className="mx-3"><a className="navbar-brand text-sm hover:text-gray-300 font-semibold transition-colors duration-300" href="#">LANGUAGE</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Banner_nav;
