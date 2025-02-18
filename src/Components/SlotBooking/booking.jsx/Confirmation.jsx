import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import bgImage from "../../../assets/pngwing.com (2).png";
import axios from "axios";

const Confirmation = () => {
  const { _id } = useParams();
  const [confirm, setConfirm] = useState(null); 

  const getConfirmMessage = async (_id) => {
    const authToken = localStorage.getItem("token");

    try {
      const res = await axios.get(
        `http://localhost:7000/api/appointment/booking?_id=${_id}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setConfirm(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data.message || err.message);
    }
  };

  useEffect(() => {
    if (_id) {
      getConfirmMessage(_id);
    }
  }, [_id]);

  if (!confirm) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="border-2 border-gray-300 shadow-md mt-12 mb-10 sm:ml-10 sm:mr-10 md:ml-20 md:mr-20 lg:ml-96 lg:mr-96 pt-10 pb-10 pl-2 pr-2">
        <div className="text-center">
          <div className="flex justify-center">
            <img src={bgImage} height="60px" width="60px" alt="tick" />
          </div>

          <h1 className="font-bold text-2xl leading-10 sm:text-xl md:text-2xl lg:text-3xl mt-4">
            Appointment booked Successfully!
          </h1>
          <p className="text-base sm:text-sm md:text-base lg:text-lg mt-4">
            Appointment booked with{" "}
            <span className="font-bold">{confirm.doctorFirstName}</span>
            <br />
           Consultation  for
            <span className="font-bold text-xl">
              {" "}
              {confirm.patientConsult}
            </span>{" "}
           
            on <span className="font-bold">{confirm.slot}</span>
            <br />
          </p>
          <button className="border rounded-md bg-green-500 text-white font-bold pl-4 pr-4 pt-2 pb-2 mt-7 text-base sm:text-sm md:text-base lg:text-lg">
            View Invoice
          </button>
        </div>

        <Outlet />
      </div>
      <div className="px-9">
        <Link to={"/"}>
          <button className=" hover:text-blue-600">Go to Homepage</button>
        </Link>
      </div>
    </>
  );
};

export default Confirmation;
