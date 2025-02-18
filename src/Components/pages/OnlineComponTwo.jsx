// HowItWorks.js
import React from "react";
import { LuMousePointerClick } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaLink } from "react-icons/fa";
const HowItWorks = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          How it works
        </h2>

        {/* Steps Section */}
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 mb-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <LuMousePointerClick className=" text-3xl" />
            </div>
            <p className="text-gray-700">Select a specialty or symptom</p>
          </div>
          <div className="w-36 h-[2px] bg-gray-400 hidden md:block"></div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <RiSecurePaymentLine className=" text-3xl" />
            </div>
            <p className="text-gray-700">
              Audio/video call with a verified doctor
            </p>
          </div>
          <div className="w-36 h-[2px] bg-gray-400 hidden md:block"></div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FaLink className=" text-3xl" />
            </div>
            <p className="text-gray-700">
              Get a digital prescription & a free follow-up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
