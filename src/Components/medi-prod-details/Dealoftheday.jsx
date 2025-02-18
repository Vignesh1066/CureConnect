import React from "react";
import { AiOutlineHeart, AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";

const CardComponent = ({ image, title, subtitle, originalPrice, offerPrice }) => {
  return (
    <div className="relative bg-white border-2 border-gray-300  shadow-md shadow-gray-500 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 w-full h-auto mx-6 hover:scale-105 transition-transform">
      {/* Image Section */}
      <div className="relative flex-shrink-0 w-full sm:w-[250px] h-[200px] sm:h-[250px] group mx-auto sm:mx-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-2 left-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <AiOutlineHeart className="text-gray-600 bg-white p-2 rounded-full shadow-md cursor-pointer hover:text-red-500" size={30} />
          <AiOutlineEye className="text-gray-600 bg-white p-2 rounded-full shadow-md cursor-pointer hover:text-blue-500" size={30} />
        </div>
      </div>
      
      {/* Text Content Section */}
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl font-bold hover:text-blue-600 hover:underline cursor-pointer">
          {title}
        </h2>
        <p className="text-gray-500 text-sm mt-2">{subtitle}</p>
        <div className="flex items-center space-x-5 mt-3">
          <span className="line-through text-gray-400 text-sm">₹{originalPrice}</span>
          <span className="text-green-600 font-bold text-lg">₹{offerPrice}</span>
        </div>
        <button className="mt-6 flex items-center space-x-3 bg-transparent border border-blue-500 text-blue-500 rounded-md px-3 py-2 transition-all hover:bg-blue-500 hover:text-white">
          <AiOutlineShoppingCart className="text-white bg-blue-500 p-1 rounded-md" size={26} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
