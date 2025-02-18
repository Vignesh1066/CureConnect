import React, { useState, useEffect } from "react";

const OnlineFilter = ({ categories, onApplyFilters }) => {
  const [gender, setGender] = useState(null);
  const [feeRange, setFeeRange] = useState(null);
  const [category, setCategory] = useState(null);

  // Function to apply all filters together
  const applyFilters = () => {
    onApplyFilters({
      gender,
      feeRange,
      category,
    });
  };

  // Apply filters every time a filter changes
  useEffect(() => {
    applyFilters();
  }, [gender, feeRange, category]);

  // Update gender
  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender);
  };

  // Update fee range
  const handleFeeChange = (event, range) => {
    if (event.target.checked) {
      setFeeRange(range); // Set the selected fee range
    } else {
      setFeeRange(null); // Clear the fee range if unchecked
    }
  };

  // Update category
  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-medium border-b-2 border-gray-400 px-3 py-4">
        FILTER DOCTORS
      </h2>

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

      {/* Category Filter */}
      <h2 className="text-lg font-semibold px-3 py-4">Category</h2>
      <div className="px-3 space-y-2">
        {categories.map((cat) => (
          <label key={cat} className="flex items-center space-x-2 text-lg">
            <input
              type="radio"
              name="category"
              className="w-5 h-5"
              checked={category === cat}
              onChange={() => handleCategoryClick(cat)}
            />
            <span>{cat}</span>
          </label>
        ))}
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

export default OnlineFilter;
