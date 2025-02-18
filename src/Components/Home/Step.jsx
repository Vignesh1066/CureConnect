import React from "react";
import { TbWorldSearch } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBookMedical } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import img1 from "../../assets/aboutus3-01[1].png";

const Steps = () => {
  return (
    <div className="w-full mt-16 mb-7">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          4 Easy Steps to Get Your Solution
        </h2>
        <p className="mt-3 text-gray-600 text-sm max-w-2xl mx-auto">
          Follow these simple steps to connect with the best doctors and get the care you need.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Full-Width Image on smaller screens, 50% on lg */}
        <div className="flex-1 w-full lg:w-1/2">
          <img
            src={img1}
            alt="Doctor"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Steps Section */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center justify-center w-full h-[200px] hover:scale-105  sm:h-[250px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <TbWorldSearch className="text-5xl text-gray-700" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Search Doctors
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Find the best doctors for your needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center justify-center w-full h-[200px]  hover:scale-105 sm:h-[250px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FaUserDoctor className="text-5xl text-gray-700" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Check Doctor Profiles
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              View detailed profiles of doctors to make informed decisions.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center justify-center w-full h-[200px]  hover:scale-105 sm:h-[250px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <FaBookMedical className="text-5xl text-gray-700" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Book Appointment
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Schedule an appointment online easily.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center justify-center w-full h-[200px]  hover:scale-105 sm:h-[250px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <IoMdCheckmarkCircleOutline className="text-5xl text-gray-700" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Get Your Solution
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Receive the best solution for your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
