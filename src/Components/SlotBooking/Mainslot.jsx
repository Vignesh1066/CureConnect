import React, { useState } from "react";
import Slotbooking from "./Slotbooking";

import { Link } from "react-router-dom";

function Mainslot() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Generate the next 7 days dynamically
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(currentDate.getDate() + index);
    return {
      day: date.toLocaleDateString("en-US", { weekday: "long" }),
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    };
  });

  const [selectedDay, setSelectedDay] = useState(days[0]);

  return (
    
    <div className="container mx-auto p-4 sm:p-6 min-h-screen">

      
          <div className="relative h-[80px]  z-10 w-full p-6  text-center ">
        <h1 className="text-2xl lg:text-3xl  font-normal text-gray-800">
          Book The Avaliable Slots 
        </h1>
      </div>
      
 
      {/* Header with current date */}
      <div className="text-center mb-6 flex flex-col  items-start">
        <h1 className="text-xl  sm:text-2xl font-semibold text-gray-700  tracking-widest lg:text-3xl">
        {selectedDay.date} 
        </h1>
        <h3 className=" text-gray-700"> 
        {selectedDay.day}
        </h3>
      </div>

      {/* Day Selector */}
      <div className="mb-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 ">
          {days.map((dayObj, index) => (
            <button
              key={index}
              className={`px-4 py-2 flex flex-col items-center border-2 border-gray-300 rounded-lg ${
                selectedDay.day === dayObj.day
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedDay(dayObj)}
            >
              <span className="text-sm font-medium">{dayObj.day}</span>
              <span className="text-xs font-thin">{dayObj.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Component */}
      <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-4 sm:p-6 shadow-md mt-4 ">
        <Slotbooking />
      </div>
      <div className="btn-con  py-9  w-full flex justify-center items-center">

       
        <button className="w-[20%] bg-[#0E82FD] hover:scale-105 transition ease-in-out duration-500 text-white py-2 px-6 rounded-md">
        <Link to={"checkout"}>
            Procced To Pay
            </Link>
              </button>
      
            
            </div>
    </div>
  );
}

export default Mainslot;
