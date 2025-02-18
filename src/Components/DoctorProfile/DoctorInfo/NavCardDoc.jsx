// import React from "react";
// import { FaAddressCard } from "react-icons/fa";
// import { FaUserDoctor } from "react-icons/fa6";
// import { Link, useLocation, useParams } from "react-router-dom";
// import { SubCard } from "./SubCard";

// const NavCardDoc = () => {
//   const location = useLocation();
//   const { _id } = useParams();

//   // Check if 'onlineconsultant' exists in the current path
//   const isOnlineConsultant = location.pathname.includes("onlineconsult");

//   // Base path to conditionally set the links
//   const basePath = isOnlineConsultant ? "onlineconsult" : "finddoctor";

//   const pharmacyMenu = [
//     {
//       image: <FaAddressCard className="text-2xl font-semibold" />,
//       title: "OverView",
//       path: `/${basePath}/doctors/${_id}`,
//     },
//     {
//       image: <FaUserDoctor className="text-2xl font-semibold" />,
//       title: "Reviews",
//       path: `/${basePath}/doctors/${_id}/reviews`,
//     },
//     {
//       image: <FaUserDoctor className="text-2xl font-semibold" />,
//       title: "Add Reviews",
//       path: `/${basePath}/doctors/${_id}/addreviews`,
//     },
//     {
//       image: <FaUserDoctor className="text-2xl font-semibold" />,
//       title: "Business Hours",
//       path: `/${basePath}/doctors/${_id}/businesshours`,
//     },
//   ];

//   return (
//     <div className="w-full h-auto  py-2 flex flex-col">
//       <div className="flex flex-col  items-center">
//         <div className="w-full  max-w-8xl">
//           <div className="grid grid-cols-1  gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {pharmacyMenu.map((value, index) => (
//               <Link to={value.path} key={index}>
//                 <SubCard
//                   props={{ ...value }}
//                   className={`${
//                     value.path === location.pathname
//                       ? "bg-gradient-to-r from-blue-500 to-blue-900 text-white py-4 px-6 rounded-lg shadow-lg flex justify-center items-center gap-4"
//                       : "bg-white py-4 px-6 rounded-lg shadow-md flex items-center gap-4 text-blue-900 text-center justify-center "
//                   }`}
//                 />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavCardDoc;





import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const NavCardDoc = () => {
  const location = useLocation();
  const { _id } = useParams();

  // State for toggle functionality
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Check if 'onlineconsultant' exists in the current path
  const isOnlineConsultant = location.pathname.includes("onlineconsult");

  // Base path to conditionally set the links
  const basePath = isOnlineConsultant ? "onlineconsult" : "finddoctor";

  const navItems = [
    { name: "OverView", path: `/${basePath}/doctors/${_id}` },
    { name: "Reviews", path: `/${basePath}/doctors/${_id}/reviews` },
    { name: "Add Reviews", path: `/${basePath}/doctors/${_id}/addreviews` },
    { name: "Business Hours", path: `/${basePath}/doctors/${_id}/businesshours` },
  ];

  return (
    <nav className="w-full shadow-md px-5 py-4 shadow-slate-300">
      {/* Mobile menu icon */}
      <div className="flex justify-between items-center lg:hidden">
        <h1 className="text-lg font-bold">Doctor Detials</h1>
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
export default NavCardDoc;
