import React from "react";
import Footer from "./footer/footer";
import Grey from "./greypiece/grey";
import PrimarySearchAppBar from "./header/header";

import Navbar from "./navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <PrimarySearchAppBar
 />
      <main> {children} </main>
      <Grey />
      <Footer />
    </div>
  );
};

export default Layout;
