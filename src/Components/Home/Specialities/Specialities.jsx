import React from "react";
import { FaTooth, FaBrain, FaHeartbeat, FaUserMd, FaBone } from "react-icons/fa";
import SpecialitiesCard from "./SpecialitiesCards";
import { useNavigate } from "react-router-dom";



const specialities = [
  { title: "Dentist", icon: <FaTooth />, bgImage: "https://img.freepik.com/free-photo/young-female-patient-with-open-mouth-examining-dental-inspection-dentist-office_496169-976.jpg?uid=R162567627&ga=GA1.1.884605993.1731922461&semt=ais_hybrid" },
  { title: "Neurologist", icon: <FaBrain />, bgImage: "https://img.freepik.com/free-photo/professional-doctor-neuroscience-developing-treatment-neurological-diseases-examining-patient-evolutions-doctor-researcher-adjusting-eeg-headset-analyzing-brain-functions-health-status_482257-16441.jpg?uid=R162567627&ga=GA1.1.884605993.1731922461&semt=ais_hybrid" },
  { title: "Cardiologist", icon: <FaHeartbeat />, bgImage: "https://img.freepik.com/free-photo/nurse-holding-tablet-with-heart-figure-cardiology-diagnosis_482257-24452.jpg?uid=R162567627&ga=GA1.1.884605993.1731922461&semt=ais_hybrid" },
  { title: "Urologist", icon: <FaUserMd />, bgImage: "https://img.freepik.com/free-photo/doctor-explaining-anatomic-model-patient_23-2149351703.jpg?uid=R162567627&ga=GA1.1.884605993.1731922461&semt=ais_hybrid" },
  { title: "Orthopedic", icon: <FaBone />, bgImage: "https://img.freepik.com/free-photo/chiropractor-provides-aid-patient_482257-90376.jpg?uid=R162567627&ga=GA1.1.884605993.1731922461&semt=ais_hybrid" },
];

function Specialities({topic}) {
  
  return (
    <div className=" w-full mt-16 mb-7">
      <h1 className="text-3xl font-bold  mb-2 px-3 text-center">{topic}</h1>
      <p className=" px-3 text-black mb-10 text-center">
        Access to expert physicians and surgeons, advanced technologies and top-quality surgery  facilities right here.
      </p>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {specialities.map((item, index) => (
          <SpecialitiesCard
            key={index}
            title={item.title}
            icon={item.icon}
            bgImage={item.bgImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Specialities;
