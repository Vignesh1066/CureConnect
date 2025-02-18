
import React, { useRef } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { GiPelvisBone, GiBackPain } from "react-icons/gi";

const OurProductBrands = () => {
  const brands = [
    {
      id: 1,
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/24b97add6c3-BontressCB.jpg?dim=1440x0",
      // name: "Skin Care",
      icon: <MdFaceRetouchingNatural className="text-blue-500 text-2xl" />,
    },
    {
      id: 2,
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/108fab87913-ProhanceSB.jpg?dim=1440x0",
      // name: "Eye Care",
      icon: <FaEye className="text-green-500 text-2xl" />,
    },
    {
      id: 3,
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/2a98ec7794a-LupinHumJPEG.jpg?dim=1440x0",
      // name: "Bone And Joint Care",
      icon: <GiPelvisBone className="text-red-500 text-2xl" />,
    },
    
    {
      id: 4,
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/3b38330c9f0-VenusiaCB.jpg?dim=1440x0",
      // name: "Pain Relief",
      icon: <GiBackPain className="text-orange-500 text-2xl" />,
    },
    {
      id: 5,
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/1a248d93dbb-AhaglowSB.jpg?dim=1440x0",
      // name: "Pain Relief",
      icon: <GiBackPain className="text-orange-500 text-2xl" />,
    },
    {
      id: 6,
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/f91386c4827-OmnigelSBJPG.jpg?dim=1440x0",
      // name: "Pain Relief",
      icon: <GiBackPain className="text-orange-500 text-2xl" />,
    },
    {
      id: 7,
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/3414d8afbee-DaffySBFinal.jpg?dim=1440x0",
      // name: "Pain Relief",
      icon: <GiBackPain className="text-orange-500 text-2xl" />,
    },
    {
      id: 8,
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/6aabb53d977-SavikalpaSBCB.jpg?dim=1440x0",
      // name: "Pain Relief",
      icon: <GiBackPain className="text-orange-500 text-2xl" />,
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
    <div className="flex flex-col justify-center  p-6">
      <div className="relative w-full max-w-7xl mx-auto">
      
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Brands</h2>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
            >
              <AiOutlineArrowLeft className="text-xl" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
            >
              <AiOutlineArrowRight className="text-xl" />
            </button>
          </div>
        </div>

       
        <div
          ref={carouselRef}
          className="flex items-center space-x-6 overflow-x-scroll  relative"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
              className="relative  h-50 border flex-shrink-0 w-[300px] bg-white rounded-lg shadow-md"
            >
            
              <div className="w-full h-55 overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="flex-none w-50  border rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProductBrands ;
