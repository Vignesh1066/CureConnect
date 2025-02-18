import React, { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaRegMoneyBillAlt, FaTooth, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { Link, Outlet, useParams } from "react-router-dom";
import { PiAddressBook, PiAddressBookFill } from "react-icons/pi";
import { MdOutlineAddIcCall, MdOutlineEmail } from "react-icons/md";

import HeadPart from "../heroSection/HeadPart";
import axios from "axios";
import NavCardDoc from "./DoctorInfo/NavCardDoc";

const DoctorProfile = () => {
  const { _id } = useParams();
  const [doctorInfo, setDoctorInfo] = useState([]);

  const getByUpdate = async (_id) => {
    const authToken = localStorage.getItem("token");

    try {
      await axios
        .get(`http://localhost:7000/admin/getadmin/user/?_id=${_id}`, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((res) => {
          setDoctorInfo(res.data);
        })
        .catch((err) => {
          console.log(err.response.data.Message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (_id) {
      getByUpdate(_id);
    }
  }, [_id]);

  return (
    <>
      <div>
        <HeadPart heading={"Doctor Profile"} image={"https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=1xw:0.8425829875518672xh;center,top&resize=1200:*"} />
      </div>

      <div className="relative w-full h-auto flex flex-col items-center justify-start px-5 lg:px-10">
        {/* Doctor Details Section */}
        <div className="w-full relative border border-gray-300 rounded-md flex flex-col lg:flex-row items-center lg:items-start p-6 max-md: gap-6 mt-10 shadow-md">
          {/* Doctor Image */}
          <div className="img-con w-full sm:w-[250px] md:w-[300px] h-[250px] md:h-[300px] flex justify-center items-center shadow-md shadow-slate-600 rounded-md">
            <img
              src={`http://localhost:7000/upload/${doctorInfo.profileFileName}`}
              alt="Doctor"
              className="object-cover w-full h-full rounded-md"
            />
          </div>

          {/* Doctor Details */}
          <div className="details-con flex-1 space-y-4 lg:py-7 text-center lg:text-left">
            <h1 className="text-2xl font-medium">{`${doctorInfo.firstName} ${doctorInfo.lastName}`}</h1>
            <p className="text-lg text-gray-950">
              {`${doctorInfo.UgDegree} ${doctorInfo.PgDegree}`}
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-800">
              <FaTooth />
              <h3 className="text-lg">{`${doctorInfo.category}`}</h3>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-1 text-yellow-500">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarHalf />
              <p className="text-sm text-gray-600">(72 Reviews)</p>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-950">
              <IoLocationOutline className="text-xl " />
              <p>{`${doctorInfo.location}`}</p>
            </div>
            {/* Adding Email and Address */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-950">
              <PiAddressBook className="text-2xl max-md:text-5xl" />
              <p>{`${doctorInfo.address}`}</p>
            </div>
          </div>

          {/* Doctor Extra Details */}
          <div className="details2-con flex flex-col lg:py-7 items-center lg:items-start gap-4 mt-6 lg:mt-0">
            <div className="flex items-center gap-2">
              <MdOutlineEmail className="text-xl" />
              <p className="text-base">{`${doctorInfo.email}`}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineAddIcCall className="text-2xl" />
              <p className="text-base">{`${doctorInfo.phoneNumber}`}</p>
            </div>
            <div className="flex items-center gap-2">
              <BiLike className="text-xl" />
              <p className="text-base">98% (Positive)</p>
            </div>
            <div className="flex items-center gap-2">
              <FaRegMoneyBillAlt className="text-xl" />
              <p className="text-base">{`Rs: ${doctorInfo.consultationFee}`}</p>
            </div>
            {/* <div className="btn-con w-full py-6">
              <Link to={`/book-appointment/${_id}`}>
                <button className="w-full bg-[#0E82FD] hover:scale-105 transition ease-in-out duration-500 text-white py-2 px-6 rounded-md">
                  Book Appointment
                </button>
              </Link>
            </div> */}

            <div className="btn-con w-full py-6">
              <Link
                to={`/${
                  window.location.pathname.includes("onlineconsult")
                    ? `onlineconsult/book-appointment/${_id}`
                    :`finddoctor/book-appointment/${_id}`
                }`}
              >
                <button className="w-full bg-[#0E82FD] hover:scale-105 transition ease-in-out duration-500 text-white py-2 px-6 rounded-md">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full px-5 lg:px-10 mt-10">
        <NavCardDoc/>
      </div>

      {/* Outlet for Nested Routes */}
      <Outlet />
    </>
  );
};

export default DoctorProfile;
