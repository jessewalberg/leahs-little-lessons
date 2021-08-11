import React from "react";
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <footer>
        footer
      </footer>
    </>
  )
}

export default Layout;