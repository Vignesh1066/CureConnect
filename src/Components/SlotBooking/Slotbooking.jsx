import React, { useState } from "react";
import { FaClock } from "react-icons/fa"; // Import the clock icon

function Slotbooking() {
  // Define all time slots for each period
  const slots = {
    Morning: ["09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 12:30"],
    Afternoon: ["12:30 - 01:00 (Lunch)", "01:00 - 02:00", "02:00 - 03:00", "03:00 - 04:00"],
    Evening: ["04:00 - 05:00", "05:00 - 06:00", "06:00 - 07:00", "07:00 - 08:00"],
  };

  // State to control visible slots for each period
  const [visibleSlots, setVisibleSlots] = useState({
    Morning: 2, // Initially show 2 slots for Morning
    Afternoon: 2, // Initially show 2 slots for Afternoon
    Evening: 2, // Initially show 2 slots for Evening
  });

  const [selectedSlot, setSelectedSlot] = useState(""); // Store the selected time slot

  // Handler to load more slots for a specific period
  const handleLoadMore = (period) => {
    setVisibleSlots((prev) => ({
      ...prev,
      [period]: slots[period].length, // Show all slots for the period
    }));
  };

  return (
    <div className="flex justify-between space-x-6">
      {["Morning", "Afternoon", "Evening"].map((period) => (
        <div key={period} className="flex-1">
          <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
            {period}
          </h2>
          <div className="space-y-4">
            {/* Display time slots */}
            {slots[period].slice(0, visibleSlots[period]).map((slot, index) => (
              <button
                key={index}
                onClick={() =>
                  slot !== "12:30 - 01:00 (Lunch)" && setSelectedSlot(slot)
                } // Exclude lunch from selection
                className={`w-full px-4 py-2 flex items-center justify-start rounded-lg border ${
                  selectedSlot === slot
                    ? "bg-blue-600 text-white"
                    : slot === "12:30 - 01:00 (Lunch)"
                    ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                    : "bg-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white"
                } font-semibold`}
                style={{ margin: slot === "12:30 - 01:00 (Lunch)" ? "10px 0" : "" }} // Apply custom margin for Lunch
              >
                <FaClock className="text-gray-500 mr-3" /> {/* Icon before timings */}
                <span className="text-left">{slot}</span>
              </button>
            ))}
            {/* Load More Link */}
            {visibleSlots[period] < slots[period].length && (
              <button
                onClick={() => handleLoadMore(period)}
                className="text-blue-600 hover:underline mt-2 block text-center"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      ))}
       
    </div>
  );
}

export default Slotbooking;
