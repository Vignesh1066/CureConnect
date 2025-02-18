import React, { useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const OnlineDoctorCard = ({
  _id,
  image,
  docName,
  qualification,
  roleIcon,
  role,
  review,
  location,
  likes,
  feedback,
  consultationFee,
}) => {
  const [date] = useState(new Date().toISOString().split("T")[0]);

  return (
    <div className="doc-con w-full h-auto border-2 border-gray-300 rounded-md flex flex-col md:flex-row md:justify-evenly items-center p-4 gap-4 shadow-md shadow-slate-400">
      {/* Image Section */}
      <div className="img-con w-[150px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[180px] md:h-[200px] flex justify-center items-center p-2 shadow-md shadow-slate-600">
        <img
          src={`http://localhost:7000/upload/${image}`}
          alt="Doctor"
          className="object-cover w-full h-full rounded-md"
        />
      </div>

      {/* Doctor Details Section */}
      <div className="details-con flex-1 space-y-3 text-center md:text-left">
        <h1 className="text-xl sm:text-2xl font-medium">{docName}</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700">
          {qualification}
        </p>
        <div className="icon flex items-center justify-center md:justify-start gap-2 text-blue-800">
          {roleIcon}
          <h3 className="text-sm sm:text-lg">{role}</h3>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-500">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStarHalf />
          <p className="text-xs sm:text-sm text-gray-600">({review} Reviews)</p>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
          <FaMapLocationDot />
          <p className="text-xs sm:text-sm">{location}</p>
        </div>
      </div>

      {/* Action Section */}
      <div className="details2-con flex flex-col items-center md:items-start gap-4">
        <div className="like flex items-center gap-2">
          <BiLike />
          <p className="text-xs sm:text-sm">{likes} (Positive)</p>
        </div>
        <div className="feedback flex items-center gap-2">
          <IoChatbubbleEllipsesOutline />
          <p className="text-xs sm:text-sm">{feedback} feedback</p>
        </div>
        <div className="fee flex items-center gap-2">
          <FaRegMoneyBillAlt />
          <p className="text-xs sm:text-sm">Rs: {consultationFee}</p>
        </div>
        <div className="btn-con flex flex-col gap-2 w-full">
          <Link to={`/onlineconsult/doctors/${_id}`}>
            <button className="w-full bg-[#0E82FD] hover:scale-105 transition ease-in-out duration-500 text-white py-2 px-8 md:px-12 rounded-md">
              View Profile
            </button>
          </Link>

          <Link to={`/onlineconsult/book-appointment/${_id}`}>
            <button className="w-full bg-[#017516] hover:scale-105 transition ease-in-out duration-500 text-white py-2 px-8 md:px-12 rounded-md">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnlineDoctorCard;
