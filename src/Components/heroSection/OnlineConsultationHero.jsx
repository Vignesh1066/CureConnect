import React from "react";
import { Link } from "react-router-dom";

function OnlineConsultationHero() {
  return (
      <div className= "bg-gradient-to-b from-blue-800 to-blue-400 min-h-screen flex flex-col items-center text-white">
      <header className="text-center mt-16 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Consultation With Our Doctor Anywhere, Anytime
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
          by <span className="text-blue-300 underline">Phone or Video Call</span>
        </h2>
        <p className="mt-4 text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div className="mt-6 flex justify-center ">
          <Link to={"doctorbycetegory"}>
          <button className="bg-teal-500 px-6 py-2 rounded-lg text-base md:text-lg font-semibold hover:scale-105 transition-transform">
            Start Consult
          </button>
          </Link>
         
        </div>
      </header>

      {/* Right Section */}
      <div className="w-full lg:w-[80%] min-h-[100px] relative top-10 md:top-20 lg:top-20 mb-16 md:mb-20 lg:mb-36 px-4">
        <div className="relative">
          <img
            className="w-full rounded-lg shadow-lg object-cover"
            src="https://templatekit.jegtheme.com/holadoc/wp-content/uploads/sites/212/2021/11/doctor-on-a-video-call-with-a-patient-Z7YHWTH.jpg"
            alt="Doctor Consultation"
          />
          {/* Overlay Text */}
          <div className="absolute top-32 left-4 md:top-40 md:left-[-60px] bg-white text-blue-900 p-4 rounded-md shadow-md hidden lg:block">
            <h4 className="font-bold">Dr. Marlie Varga</h4>
            <p>General Doctor</p>
          </div>
          <div className="absolute bottom-16 left-4 md:bottom-20 md:left-[-60px] bg-white text-blue-900 p-4 rounded-md shadow-md hidden lg:block">
            <p>24/7 Service Center</p>
          </div>
          <div className="absolute bottom-16 right-4 md:bottom-20 md:right-[-60px] bg-white text-blue-900 p-4 rounded-md shadow-md hidden lg:block">
            <p>45+ Doctors Online</p>
          </div>
          <div className="absolute top-32 right-4 md:top-40 md:right-[-60px] bg-white text-blue-900 p-4 rounded-md shadow-md hidden lg:block">
            <p>2200+ Patients</p>
            <p className="text-sm text-gray-600">4.9 (2k Reviews)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineConsultationHero;