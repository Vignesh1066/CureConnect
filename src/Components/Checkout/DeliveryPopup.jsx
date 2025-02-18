// import React, { useState } from "react";

// const DeliveryPopup = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };

//   return (
//     <div className="relative">
//       {/* Main Page */}
//       <div className="p-6">
//         <button
//           onClick={togglePopup}
//           className="bg-blue-500 text-white py-2 px-4 rounded-lg"
//         >
//           Add Delivery
//         </button>
//       </div>

//       {/* Overlay Background */}
//       {isPopupOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={togglePopup}
//         ></div>
//       )}

//       {/* Popup */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-full lg:w-1/3 bg-white shadow-xl z-50 transform ${
//           isPopupOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300`}
//       >
//         <div className="p-6">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-bold">Delivery Details</h2>
//             <button
//               onClick={togglePopup}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               ✖
//             </button>
//           </div>

//           {/* Select Patient Section */}
//           <div className="mb-6">
//             <div className="flex justify-between items-center mb-2">
//               <label className="text-sm font-medium">Select Patient</label>
//               <button className="text-blue-600 text-sm font-semibold">
//                 + Add Patient
//               </button>
//             </div>
//             <div className="space-y-2">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="patient"
//                   className="w-4 h-4 text-blue-500"
//                 />
//                 sri ganesh
//               </label>
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="patient"
//                   className="w-4 h-4 text-blue-500"
//                 />
//                 Another Patient
//               </label>
//             </div>
//           </div>

//           {/* Select Address Section */}
//           <div className="mb-6">
//             <div className="flex justify-between items-center mb-2">
//               <label className="text-sm font-medium">Select Address</label>
//               <button className="text-blue-600 text-sm font-semibold">
//                 + Add Address
//               </button>
//             </div>
//             <div className="space-y-2">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="address"
//                   className="w-4 h-4 text-blue-500"
//                 />
//                 Home (600107)
//                 <div className="text-gray-500 text-sm">
//                   no19, sakthi nagar 18th street, laks, Chennai, TAMIL NADU
//                   (600107)
//                 </div>
//               </label>
//             </div>
//           </div>

//           {/* Footer Buttons */}
//           <div className="flex justify-between items-center mt-6">
//             <button
//               onClick={togglePopup}
//               className="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg"
//             >
//               Cancel
//             </button>
//             <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">
//               Save & Continue
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeliveryPopup;
