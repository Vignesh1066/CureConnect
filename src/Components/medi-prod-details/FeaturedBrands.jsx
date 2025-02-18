import React, { useRef } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { GiPelvisBone, GiStomach, GiBackPain } from "react-icons/gi";
import Heading from "./Title/Title";

const FeaturedBrands = () => {
  const brands = [
    {
      id: 1,
      image:
        "https://img.freepik.com/free-photo/woman-home-applying-cream-mask_1303-24618.jpg",
      name: "Skin Care",
      icon: <MdFaceRetouchingNatural className="text-gray-500 text-2xl" />,
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/free-photo/woman-getting-eye-exam-ophthalmologist-office_52683-137895.jpg",
      name: "Eye Care",
      icon: <FaEye className="text-gray-500 text-2xl" />,
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/free-photo/elderly-woman-sitting-wheelchairs-with-knee-pain_1150-4338.jpg",
      name: "Bone And Joint Care",
      icon: <GiPelvisBone className="text-gray-500 text-2xl" />,
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/free-photo/young-brunette-woman-standing-blue-background-with-hand-stomach-because-indigestion-painful-illness-feeling-unwell-ache-concept_839833-13927.jpg",
      name: "Digestive Care",
      icon: <GiStomach className="text-gray-500 text-2xl" />,
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/free-photo/sporty-woman-with-sore-neck_23-2147768280.jpg",
      name: "Pain Relief",
      icon: <GiBackPain className="text-gray-500 text-2xl" />,
    },
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col justify-start p-4 sm:p-6">
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <Heading title={" View By Health Concern"} />
        
        <div className="flex items-center justify-between mb-6">
          {/* Scroll buttons for mobile */}
          <button onClick={scrollLeft} className="text-gray-500 p-2">
            <AiOutlineArrowLeft />
          </button>
          <button onClick={scrollRight} className="text-gray-500 p-2">
            <AiOutlineArrowRight />
          </button>
        </div>

        <div
          ref={carouselRef}
          className="flex items-center space-x-4 overflow-x-scroll scrollbar-hide"
        >
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="relative flex-shrink-0 w-[250px] sm:w-[300px] bg-white rounded-lg shadow-md"
            >
              <div className="w-full h-48 sm:h-60 overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                />
              </div>

              {/* Make sure the label and icon are centered and aligned properly */}
              <div className="absolute w-full bottom-[-30px] px-4 sm:px-6  bg-white shadow-md shadow-gray-500 rounded-lg text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-2">{brand.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                    {brand.name}
                  </h3>
                </div> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;
