import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";

const Root = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* daynamic */}
      <div className="min-h-[calc(100vh - 300px) w-10/12 mx-auto py-14]">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Root;
