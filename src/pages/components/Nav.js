import React, { useState } from "react";
import { Link } from "gatsby";
import { FiMenu, FiX } from "react-icons/fi";
import justApple from "../../images/logo/just-apple.svg";
import justText from "../../images/logo/just-text.svg";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleMobileNavToggleClick = () => {
    setNavOpen(!navOpen);
  };
  return (
    <nav className="flex items-center flex-col font-main justify-between mt-2">
      <div className="flex flex-wrap w-full justify-between items-center">
        <Link to={"/"}>
          <img className="w-3/4" src={justApple} alt="apple drawn logo" />
        </Link>
        {navOpen ? (
          <FiX size={"3rem"} onClick={handleMobileNavToggleClick} />
        ) : (
          <FiMenu size={"3rem"} onClick={handleMobileNavToggleClick} />
        )}
      </div>
      <img
        className="my-7 lg:w-2/3"
        src={justText}
        alt="leahs little lessons"
      />
      <ul
        id="mobile-navigation"
        className={`${
          navOpen ? "flex flex-col" : "hidden"
        } gap-4 items-center text-3xl cursor-pointer mb-10`}
      >
        <li className="hover:underline cursor-pointer">
          <Link to={"/activities"}>Activities</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link to={"/plans/2021"}>Monthly Plan</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
