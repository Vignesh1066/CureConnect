import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";

const HealthPackage = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap max-md:py-6 py-20 gap-7 items-center p-4 rounded-lg">
      <div className="flex flex-wrap justify-center lg:justify-start">
      <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 lg:mb-0 lg:top-14 lg:left-16 max-md:hidden">
          <img
            src="https://templates.hibotheme.com/teli/default/assets/img/about/about-img-1.jpg"
            alt="Doctor"
            className="w-[300px] h-[300px] object-cover"
          />
        </div>

        <div className="relative lg:bottom-24 overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://templates.hibotheme.com/teli/default/assets/img/about/about-img-2.jpg"
            alt="Surgery"
            className="w-[300px] h-[300px] object-cover"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl">
            <AiOutlinePlayCircle className="animate-pulse text-5xl" />
          </button>
        </div>
      </div>

      <div className="flex-1 lg:ml-8 mt-8 px-2 lg:mt-0">
        <p className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-2">
          About Our Program
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Take Care Of Your Health With Our Health Package
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          There are many variations of passages of Lorem Ipsum available but
          majority have suffered alteration in some form, by injected humour or
          randomised words which don't sure amet consectetuer adipiscing.
        </p>

        <ul className="space-y-4">
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-600 mr-3" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">
              Provide More Potential Health
            </span>
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-600 mr-3" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">
              Operational Research Transformation
            </span>
          </li>
          <li className="flex items-center">
            <FaCheckCircle className="text-blue-600 mr-3" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">Mental Health Solution</span>
          </li>
        </ul>

        <div className="mt-8 flex items-center">
          <div className="rounded-full overflow-hidden w-12 h-12 mr-4">
            <img
              src="https://templates.hibotheme.com/teli/default/assets/img/about/doctor-2.jpg" // Replace with the doctor testimonial image
              alt="Testimonial"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="italic text-sm sm:text-base text-gray-600">
            "Think Hard And Focus On The Patient's Well-Being"
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthPackage;
