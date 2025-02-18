import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../ReusableComp/Loader";
import { useParams } from "react-router-dom";
import CheckOnlineCardDesign from "./CheckOnlineCardDesign";
import { toast } from "react-toastify";

const CheckOnlineMain = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading
  const { userId } = useParams(); // Correctly destructuring userId from useParams
  const authToken = localStorage.getItem("token");

  const fetchAppointment = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:7000/api/zoommetting/onlineappointment?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setAppointments(response.data);
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
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, [userId]); // Added userId as a dependency

  return (
    <div className="flex">
      <div className="bg-gray-200 w-full min-h-screen p-7">
        {/* Display loader while data is loading */}
        {loading ? (
          <Loader />
        ) : (
          <div>
            {appointments.map((appointment) => (
              <CheckOnlineCardDesign
                key={appointment._id}
                appointment={{
                  id: appointment._id,
                  name: appointment.patientName,
                  date: new Date(appointment.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }),
                  doctorFirstName: appointment.doctorFirstName,
                  email: appointment.patientEmail,
                  phone: appointment.patientPhone,
                  type: appointment.slot,
                  status: appointment.status,
                  patientConsult: appointment.patientConsult,
                  gender: appointment.patientGender,
                  age: appointment.patientAge,
                  payment: appointment.payment,
                  joinUrl: appointment.joinUrl,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckOnlineMain;