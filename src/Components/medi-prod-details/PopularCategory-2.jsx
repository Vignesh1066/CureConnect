import React from 'react';
import Covid from '../../assets/covid-19.png';
import Home from '../../assets/home.png';
import Petcare from '../../assets/petcare.png';
import Ayurvedic from '../../assets/ayurvedic.png';
import Swellness from '../../assets/wellness.png';
import Personal from '../../assets/personal.png';
import { IoIosArrowForward } from 'react-icons/io';

export const PopularCategory2 = () => {
  const images = [Covid, Home, Petcare, Ayurvedic, Swellness, Personal];

  const ChildOfMedicate1 = ({ image }) => {
    return (
      <div className="w-32 h-40 flex-shrink-0 p-2 sm:w-40 sm:h-48 md:w-40 md:h-48 lg:w-52 lg:h-56">
        <img
          src={image}
          alt="carousel"
          className="w-full h-full  hover:shadow-md  hover:shadow-gray-300 rounded-lg hover:scale-105"
        />
      </div>
    );
  };

  return (
    <>
      <div className=" flex justify-between items-center lg:px-11 max-md:px-4 mb-5">
        <h2 className="lg:text-3xl  text-black font-bold max-md:text-xl   ">
          Popular Category
        </h2>
        <h2 className=" flex items-center justify-between  gap-2 hover:gap-5 transition-all font-medium sm:text-base">
          <h2 className="max-md:text-sm">ViewAll </h2>
          <IoIosArrowForward className="text-2xl max-md:text-base" />
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-md:px-6 max-md:gap-2 px-11 py-4">
        {images.map((image, index) => (
          <ChildOfMedicate1 key={index} image={image} />
        ))}
      </div>
    </>
  );
};

export default PopularCategory2;
