import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../ReusableComp/Loader";

import { useParams } from "react-router-dom";
import CheckOfflineCardDesign from "./CheckOfflineCardDesign";
import { toast } from "react-toastify";

const CheckOfflineMain = () => {
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const { userId } = useParams(); // Correctly destructuring userId from useParams
  const authToken = localStorage.getItem("token");

  const fetchOfflineAppointment = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:7000/api/appointment/offlineappointment?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setAppointment(response.data);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        toast.error("Session expired. Please log in again.");
        window.location.href = "/login";  // Redirect to login page
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
      // Set loading to false in both success and error cases
    }
  };

  useEffect(() => {
    fetchOfflineAppointment();
  }, [userId]); // Added userId as a dependency

  return (
    <div className="flex">
      <div className="bg-gray-200 w-full min-h-screen p-7">
        {/* Display loader while data is loading */}
        {loading ? (
          <Loader />
        ) : (
          <div>
            {appointment.map((appointmentData) => (
              <CheckOfflineCardDesign
                key={appointmentData._id}
                appointmentData={{
                  id: appointmentData._id,
                  name: appointmentData.patientName,
                  date: new Date(appointmentData.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }),
                  doctorFirstName: appointmentData.doctorFirstName,
                  email: appointmentData.patientEmail,
                  phone: appointmentData.patientPhone,
                  type: appointmentData.slot,
                  status: appointmentData.status,
                  patientConsult: appointmentData.patientConsult,
                  gender: appointmentData.patientGender,
                  age: appointmentData.patientAge,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOfflineMain;