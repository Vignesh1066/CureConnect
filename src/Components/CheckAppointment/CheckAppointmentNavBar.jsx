

import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const CheckAppointmentNav = () => {
  const location = useLocation();
  const userId = localStorage.getItem("userId");

  // State for toggle functionality
  const [isNavOpen, setIsNavOpen] = useState(false);


  const navItems = [
    { name: "Offline Appointment", path: `/checkappointment/${userId}` },
    { name: "Online Appointment", path: `/checkappointment/${userId}/onlineappointments` },
  ];

  return (
    <nav className="w-full shadow-md px-5 py-4 shadow-slate-300">
      {/* Mobile menu icon */}
      <div className="flex justify-between items-center lg:hidden">
        <h1 className="text-lg font-bold">Appintmnent Detials</h1>
        <IoMenu
          className="text-2xl cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        />
      </div>

      {/* Mobile menu items */}
      <div
        className={`${
          isNavOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 lg:hidden`}
      >
        <div className="flex flex-col items-center mt-4 space-y-2">
          {navItems.map((item, index) => (
            <Link to={item.path} key={index} onClick={() => setIsNavOpen(false)}>
              <span
                className={`block w-full py-2 font-bold max-sm:px-14 rounded ${
                  item.path === location.pathname
                    ? `bg-gradient-to-r from-blue-900 to-blue-500  text-white`
                    : `bg-white text-black`
                } hover:bg-blue-100`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation for larger screens */}
      <div className="hidden lg:flex justify-around">
        {navItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <span
              className={`py-2 font-bold px-3 ${
                item.path === location.pathname
                  ? `bg-gradient-to-r from-blue-900 to-blue-500 text-white rounded`
                  : `bg-white text-black`
              } hover:border-b-[3px] transition-all duration-150 border-blue-400`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default CheckAppointmentNav;
