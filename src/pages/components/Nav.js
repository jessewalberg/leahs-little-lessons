import React from "react";
import logo from '../../images/logo/logo.svg';

const Nav = () => {
  return (
    <nav className="flex font-main justify-between mx-10 mt-8">
    <img className="w-1/3" src={logo} />
    <ul className="flex items-center text-3xl space-x-14 cursor-pointer">
      <li>Activities</li>
      <li>Monthly Plan</li>
      <li>Blog</li>
      <li>About</li>
    </ul>
  </nav>
  )
}

export default Nav;