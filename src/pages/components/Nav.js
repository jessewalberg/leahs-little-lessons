import React, { useState } from "react";
import { Link } from "gatsby";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../images/logo/logo.svg";
import justApple from "../../images/logo/just-apple.svg";
import justText from "../../images/logo/just-text.svg";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)

  const handleMobileNavToggleClick = () => {
    setNavOpen(!navOpen);
  }
  return (
    <nav className="flex items-center flex-col font-main justify-between mt-2">
      <div className="flex flex-wrap w-full justify-between items-center">
        <img className="w-1/6" src={justApple} />
        { navOpen ? <FiX size={"3rem"} onClick={handleMobileNavToggleClick} />: <FiMenu size={"3rem"} onClick={handleMobileNavToggleClick}/> } 
      </div>
      <img className="my-7" src={justText} />
      <ul
        id="mobile-navigation"
        className={`${navOpen ? 'flex flex-col' : 'hidden'} gap-4 items-center text-3xl cursor-pointer`}
      >
        <li className="hover:underline cursor-pointer">
          <Link to={"/activities"}>Activities</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link to={"/plans/2021"}>Monthly Plan</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Nav;
