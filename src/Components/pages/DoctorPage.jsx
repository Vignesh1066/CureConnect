import React from "react";
import DoctorCard from "../Myproj/DoctorCard";

const DoctorPage = () => {
 

  return (
    <div className="main w-full max-h-screen px-3 flex  lg:flex-row justify-center items-start gap-4">
      <div className="sidebar  lg:w-[25%] h-auto lg:h-[700px] border-2 shadow-xl shadow-slate-600 rounded-lg p-4">
        <div className="w-full">
          <h2 className="text-xl font-medium border-b-2 border-gray-400 px-3 py-4">
            FILTER DOCTORS
          </h2>
 
          <input
            type="date"
            name="date"
            placeholder="Select Date"
            className="w-full py-2 px-4 my-5 rounded-md border border-gray-300 outline-blue-400 focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] placeholder:text-gray-400"
          />

          <h2 className="text-lg font-semibold px-3 py-2">Gender</h2>
          <div className="px-3 space-y-2">
            <p className="text-lg cursor-pointer">Male</p>
            <p className="text-lg cursor-pointer">Female</p>
          </div>

          <h2 className="text-lg font-semibold px-3 py-4">By Availability</h2>
          <div className="px-3 space-y-2">
            <label className="flex items-center space-x-2 text-lg">
              <input type="checkbox" className="w-5 h-5" />
              <span>Available in next 4 hours</span>
            </label>
            <label className="flex items-center space-x-2 text-lg">
              <input type="checkbox" className="w-5 h-5" />
              <span>Available Today</span>
            </label>
            <label className="flex items-center space-x-2 text-lg">
              <input type="checkbox" className="w-5 h-5" />
              <span>Available Tomorrow</span>
            </label>
            <label className="flex items-center space-x-2 text-lg">
              <input type="checkbox" className="w-5 h-5" />
              <span>Available in next 7 days</span>
            </label>
          </div>

          <h2 className="text-lg font-semibold px-3 py-4">Fee</h2>
          <div className="px-3 space-y-2">
            <label className="flex items-center space-x-2 text-lg">
              <input type="checkbox" className="w-5 h-5" />
              <span>₹0-₹500</span>
            </label>
            <label className="flex items-center space-x-2 text-lg">
              <input type="checkbox" className="w-5 h-5" />
              <span>Above ₹500</span>
            </label>
            <label className="flex items-center space-x-2 text-lg">
              <input type="checkbox" className="w-5 h-5" />
              <span>Above ₹1000</span>
            </label>
          </div>
        </div>
      </div>

      <div className="doctor-list w-full lg:w-[75%] lg:h-[700px] rounded-lg p-4">
 <DoctorCard/>
</div>

    </div>
  );
};


export default DoctorPage;
