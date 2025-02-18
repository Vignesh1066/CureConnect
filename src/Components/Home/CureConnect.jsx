import React from "react";

import { Outlet } from "react-router-dom";
import Navbarmain from "../NavBar/NavBarComponent";
import Footer from "../Footer";

const CureConnect = () => {
  return (
    <>
      <header className=" w-full ">
        <Navbarmain />
      </header>
      <main className="relative w-full top-[82px]">
        <Outlet />
      </main>
      <footer className="relative w-full top-16">
        <Footer />
      </footer>
    </>
  );
};

export default CureConnect;
