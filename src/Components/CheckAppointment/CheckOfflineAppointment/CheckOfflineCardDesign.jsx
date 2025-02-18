

import React from "react";
import { MdAddCall, MdOutlineAttachEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const CheckOfflineCardDesign = ({ appointmentData }) => {
  if (!appointmentData) {
    return <div className="text-red-500">Error: appointmentData data is missing</div>;
  }
 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 items-center justify-center bg-white p-4 rounded-lg shadow-md mb-4 gap-y-4 gap-x-6">
      {/* Name Section */}
      <div className="text-center">
        <h4 className="font-semibold text-base">{appointmentData.name || "No Name"}</h4>
      </div>

      {/* Consultation Section */}
      <div className="text-center">
        <p className="font-medium text-gray-900">Consultation:</p>
        <p className="text-gray-950">{appointmentData.patientConsult || "Not Specified"}</p>
      </div>

      {/* Doctor Section */}
      <div className="text-center">
        <p className="font-medium text-gray-600">Doctor Name:</p>
        <p className="text-gray-950">{appointmentData.doctorFirstName || "Not Specified"}</p>
      </div>

      {/* Contact Info */}
      <div className="text-center">
      <div className="flex items-center justify-center gap-2">
          <p className="font-medium text-gray-600">Gender:</p>
          <p className="text-gray-600">{appointmentData.gender || "Unknown"}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MdAddCall />
          <p className="text-gray-600 text-sm">{appointmentData.phone || "No Phone"}</p>
        </div>
      </div>

      {/* Gender and Age */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <p className="font-medium text-gray-600">Gender:</p>
          <p className="text-gray-600">{appointmentData.gender || "Unknown"}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="font-medium text-gray-600">Age:</p>
          <p className="text-gray-600">{appointmentData.age || "N/A"}</p>
        </div>
      </div>

      {/* appointmentData Type and Date */}
      <div className="text-center">
        <p className="text-base font-sm">{appointmentData.type || "No Type"}</p>
        <div className="flex items-center justify-center gap-2">
          <IoMdTime className="text-sm" />
          <p className="text-gray-600">{appointmentData.date || "No Date"}</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
          <p className="font-medium text-gray-600">status:</p>
          <p className="text-gray-600">{appointmentData.status || "Unknown"}</p>
        </div>
    </div>
  );
};

export default CheckOfflineCardDesign;
