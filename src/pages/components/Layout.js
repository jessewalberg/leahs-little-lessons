import React from "react";
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className="wrapper max-w-9/10 max-w-7xl mx-auto mb-20">
      <Nav />
      {children}
    </div>
  )
}

export default Layout;