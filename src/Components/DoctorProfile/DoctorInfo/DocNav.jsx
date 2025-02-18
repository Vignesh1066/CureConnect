// import React from "react";
// import { Link, useLocation, useParams } from "react-router-dom";
// import { IoMenu } from "react-icons/io5";

// const DocNav = () => {
//   const location = useLocation();
//   const { _id } = useParams();

//   // Check if 'onlineconsultant' exists in the current path
//   const isOnlineConsultant = location.pathname.includes("onlineconsult");

//   // Base path to conditionally set the links
//   const basePath = isOnlineConsultant ? "onlineconsult" : "finddoctor";

//   const navItems = [
//     { name: "OverView", path: `/${basePath}/doctors/${_id}` },
//     { name: "Reviews", path: `/${basePath}/doctors/${_id}/reviews` },
//     { name: "Add Reviews", path: `/${basePath}/doctors/${_id}/addreviews` },
//     { name: "Business Hours", path: `/${basePath}/doctors/${_id}/businesshours` },
//   ];

//   return (
//     <nav
//       className={`w-full h-auto shadow-md px-5 py-4 shadow-slate-300 flex flex-row flex-wrap justify-around items-center`}
//     >
//       {/* Navigation for larger screens */}
//       <div className="flex w-full flex-wrap justify-around max-lg:hidden">
//         {navItems.map((item, index) => (
//           <Link to={item.path} key={index}>
//             <span
//               className={`py-2 font-bold px-2 ${
//                 item.path === location.pathname
//                   ? `bg-gradient-to-r from-blue-900 to-blue-500 text-white hover:border-none rounded`
//                   : `bg-white text-black`
//               } hover:border-b-[3px] transition-all duration-150 border-blue-400`}
//             >
//               {item.name}
//             </span>
//           </Link>
//         ))}
//       </div>

//       {/* Mobile menu icon */}
//       <IoMenu className="text-2xl cursor-pointer lg:hidden" />
//     </nav>
//   );
// };

// export default DocNav;

