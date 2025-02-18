import React, { useState, useEffect, useRef } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const FindDoctorHeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const [locationDropdownVisible, setLocationDropdownVisible] = useState(false);
  const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const dropdownRef = useRef(null);

  const locations = [
    "Adyar",
    "Anna Nagar",
    "Ashok Nagar",
    "Ambattur",
    "Besant Nagar",
    "Broadway",
    "Chromepet",
    "Chetpet",
    "Guindy",
    "Kodambakkam",
    "Koyambedu",
    "Mylapore",
    "Madipakkam",
    "Nungambakkam",
    "Pallavaram",
    "Padi",
    "Perungudi",
    "Purasawalkam",
    "Porur",
    "Saidapet",
    "Tambaram",
    "T Nagar",
    "Thiruvanmiyur",
    "Triplicane",
    "Velachery",
    "Villivakkam",
    "Vandalur",
    "Avadi",
    "Manali",
    "Teynampet",
    "West Mambalam",
    "East Tambaram",
    "Vadapalani",
    "Mogappair",
    "Thirumullaivoyal",
    "Kolathur",
    "Sholinganallur",
    "Navalur",
    "Perumbakkam",
    "Medavakkam",
    "Thoraipakkam",
    "Karapakkam",
    "Ramapuram",
    "Poonamallee",
    "Royapettah",
    "Royapuram",
    "Egmore",
    "Choolaimedu",
    "Aminjikarai",
    "Villivakkam",
    "Vanagaram",
    "Madhavaram",
    "Kotturpuram",
    "CIT Nagar",
    "Indira Nagar",
    "Mugalivakkam",
    "Pallikaranai",
    "Keelkattalai",
    "Thiruneermalai",
    "Peravallur",
    "Jafferkhanpet",
    "Choolai",
    "Nandanam",
    "Nerkundram",
    "Kundrathur",
    "Avadi",
  ];

  const categories = [
    "Dentist",
    "Neurology",
    "Cardiologist",
    "Urology",
    "Orthopedic",
  ];

  const navigate = useNavigate(); 

  useEffect(() => {
    if (searchQuery) {
      const filtered = locations.filter((location) =>
        location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations(locations);
    }
  }, [searchQuery]);

  const handleLocationFocus = () => {
    setLocationDropdownVisible(true);
    setCategoryDropdownVisible(false);
  };

  const handleCategoryFocus = () => {
    setCategoryDropdownVisible(true);
    setLocationDropdownVisible(false);
  };

  const handleSearch = () => {
    navigate(`doctors?location=${searchQuery}&category=${categoryQuery}`);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/medical-healthcare-blue-color_1017-26807.jpg?t=st=1734422766~exp=1734426366~hmac=6580e81c1eb13e5ae59c2bf3811f93fe7d78bdf87810506b8024713b9c9620d5&w=1060')", 
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-black text-center">
        Search Doctor, Make an Appointment
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-black text-center mb-6 sm:mb-8">
        Discover the best doctors, clinics & hospitals near you.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-4xl mb-6">
        {/* Location Input */}
        <div className="relative flex-1 min-w-[200px]" ref={dropdownRef}>
          <div className="absolute inset-y-0 left-3 flex items-center">
            <FiMapPin className="text-black text-lg sm:text-xl md:text-2xl stroke-current stroke-2" />
          </div>
          <input
            type="text"
            placeholder="Search Location"
            className="w-full p-3 pl-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            value={searchQuery}
            onFocus={handleLocationFocus}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {locationDropdownVisible && (
            <div className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-10 p-2">
              <ul>
                {filteredLocations.length > 0 ? (
                  filteredLocations.slice(0, 4).map((location, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-black"
                      onClick={() => {
                        setSearchQuery(location);
                        setLocationDropdownVisible(false);
                      }}
                    >
                      {location}
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500 p-2">No locations found.</p>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Category Input */}
        <div className="relative flex-1 min-w-[250px]" ref={dropdownRef}>
          <div className="absolute inset-y-0 left-3 flex items-center">
            <FiSearch className="text-black text-lg sm:text-xl md:text-2xl stroke-current stroke-2" />
          </div>
          <input
            type="text"
            placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
            className="w-full p-3 pl-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            value={categoryQuery}
            onFocus={handleCategoryFocus}
            onChange={(e) => setCategoryQuery(e.target.value)}
          />
          {categoryDropdownVisible && (
            <div className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-10 p-2">
              <ul>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer text-black"
                    onClick={() => {
                      setCategoryQuery(category);
                      setCategoryDropdownVisible(false);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="flex-shrink-0">
          <button
            onClick={handleSearch}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 text-white text-lg sm:text-xl md:text-2xl rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 flex justify-center items-center"
          >
            <FiSearch className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindDoctorHeroSection;
