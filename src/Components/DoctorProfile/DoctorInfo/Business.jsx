import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Business = () => {
  const { _id } = useParams();  // Get the doctor's ID from the route params
  const [slots, setSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedDate) {
      fetchSlots(selectedDate);
    }
  }, [selectedDate]);

  const fetchSlots = async (date) => {
    setLoading(true);
    setError(""); // Clear any previous errors
    try {
      const response = await axios.get(
        `http://localhost:7000/api/slots/user/${_id}?date=${date}`);

      setSlots(response.data.slots || []);
      setBookedSlots(response.data.bookedSlots || []);
    } catch (error) {
      setError("Error fetching slots. Please try again.");
      console.error("Error fetching slots:", error);
    }
    setLoading(false);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="flex justify-center w-full py-3">
      <div className="bg-white w-[85%] rounded-lg p-8 mb-6 border flex flex-col border-gray-300 shadow-lg">
      <h1 className="text-2xl font-bold">Select a Date</h1>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="border p-2 rounded mb-6"
      />
      
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div >
          <h3 className="text-lg font-bold mb-4">Available Slots</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {slots.length > 0 ? (
              slots.map((slot, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center transition-all duration-300 ${
                    bookedSlots.includes(slot)
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gray-300 hover:bg-green-400 cursor-pointer"
                  }`}
                >
                  {slot} 
                  {bookedSlots.includes(slot) ? "(Booked)" : "(Available)"}
                </div>
              ))
            ) : (
              <p className="col-span-full text-center">No slots available for this date.</p>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Business;