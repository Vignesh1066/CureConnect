import React, { useState, useEffect } from "react";

const Filter = ({ onApplyFilters }) => {
  const [gender, setGender] = useState(null);
  const [availability, setAvailability] = useState([]);
  const [feeRange, setFeeRange] = useState(null);
  const [date, setDate] = useState("");

  // Function to apply all filters together
  const applyFilters = () => {
    onApplyFilters({
      gender,
      availability,
      feeRange,
      date,
    });
  };

  // Apply filters every time a filter changes
  useEffect(() => {
    applyFilters();
  }, [gender, availability, feeRange, date]);

  // Update gender
  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender);
  };

  // Update availability
  const handleAvailabilityChange = (event, value) => {
    if (event.target.checked) {
      setAvailability((prev) => [...prev, value]); // Add to the availability list
    } else {
      setAvailability((prev) => prev.filter((item) => item !== value)); // Remove from the list
    }
  };

  // Update fee range
  const handleFeeChange = (event, range) => {
    if (event.target.checked) {
      setFeeRange(range); // Set the selected fee range
    } else {
      setFeeRange(null); // Clear the fee range if unchecked
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-medium border-b-2 border-gray-400 px-3 py-4">
        FILTER DOCTORS
      </h2>

      {/* Date Filter */}
      <input
        type="date"
        name="date"
        placeholder="Select Date"
        className="w-full py-2 px-4 my-5 rounded-md border border-gray-300 outline-blue-400 focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] placeholder:text-gray-400"
        onChange={(e) => setDate(e.target.value)}
      />

      {/* Gender Filter */}
      <h2 className="text-lg font-semibold px-3 py-2">Gender</h2>
      <div className="px-3 space-y-2">
        <p
          className={`text-lg cursor-pointer ${
            gender === "Male" ? "text-blue-500 font-semibold" : ""
          }`}
          onClick={() => handleGenderClick("Male")}
        >
          Male
        </p>
        <p
          className={`text-lg cursor-pointer ${
            gender === "Female" ? "text-blue-500 font-semibold" : ""
          }`}
          onClick={() => handleGenderClick("Female")}
        >
          Female
        </p>
      </div>

      {/* Availability Filter */}
      <h2 className="text-lg font-semibold px-3 py-4">By Availability</h2>
      <div className="px-3 space-y-2">
        <label className="flex items-center space-x-2 text-lg">
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={(e) => handleAvailabilityChange(e, "Next 4 Hours")}
          />
          <span>Available in next 4 hours</span>
        </label>
        <label className="flex items-center space-x-2 text-lg">
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={(e) => handleAvailabilityChange(e, "Today")}
          />
          <span>Available Today</span>
        </label>
        <label className="flex items-center space-x-2 text-lg">
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={(e) => handleAvailabilityChange(e, "Tomorrow")}
          />
          <span>Available Tomorrow</span>
        </label>
        <label className="flex items-center space-x-2 text-lg">
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={(e) => handleAvailabilityChange(e, "Next 7 Days")}
          />
          <span>Available in next 7 days</span>
        </label>
      </div>

      {/* Fee Filter */}
      <h2 className="text-lg font-semibold px-3 py-4">Fee</h2>
      <div className="px-3 space-y-2">
        <label className="flex items-center space-x-2 text-lg">
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={(e) => handleFeeChange(e, [0, 500])}
          />
          <span>₹0-₹500</span>
        </label>
        <label className="flex items-center space-x-2 text-lg">
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={(e) => handleFeeChange(e, [501, 1000])}
          />
          <span>Above ₹500</span>
        </label>
        <label className="flex items-center space-x-2 text-lg">
          <input
            type="checkbox"
            className="w-5 h-5"
            onChange={(e) => handleFeeChange(e, [1001, Infinity])}
          />
          <span>Above ₹1000</span>
        </label>
      </div>
    </div>
  );
};

export default Filter;
