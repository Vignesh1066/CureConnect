import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaHandsHelping } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { RiHeartAddLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";

const DynamicIcon = ({
  src,
  alt = "icon",
  width = "230px",
  height = "230px",
  positionClasses = "absolute bottom-0 left-4",
  padding = "px-2",
  margin = "mb-5",
  marginleft = "ml-7",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${positionClasses} ${margin} ${padding} ${marginleft}`}
      style={{ width, height }}
    />
  );
};

const authToken = localStorage.getItem("token")
const config = {
  headers: { Authorization: `Bearer ${authToken}` },
}

const ProductCategory = ({ bgColor, iconurl, category, categoryName }) => {
  // const handleAddToCart = ( e) => {};

  const [categoryProduct, setCategoryProduct] = useState([]);

  const fetchCategoryProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:7000/pharmacy/categoryproductforhome/?category=${category}`, config
      );
      setCategoryProduct(response.data.getCategoryProduct);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <div
      className={`min-h-56 ${bgColor} max-md:py-3 py-10 px-3  max-md:px-1 relative mt-6`}
    >
      <DynamicIcon src={`${iconurl}`} />
      <div className="con flex justify-between md:px-4 mb-5 ">
        <h2 className="lg:text-3xl  text-white font-bold max-md:text-xl   ">
          {`${categoryName}`}
        </h2>
        <h2 className=" flex items-center justify-between  gap-2 hover:gap-5 transition-all   hover:text-white font-medium sm:text-base">
          <h2 className="max-md:text-sm">ViewAll </h2>
          <IoIosArrowForward className="text-2xl max-md:text-base" />
        </h2>
      </div>
      {/* Main container */}
      <div className="flex justify-end">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  max-sm:gap-1 max-md:gap-4  min-lg:gap-5">
          {categoryProduct.map((categories) => (
            <div
              key={categories.id}
              className="product-card bg-white rounded-lg border-2 border-gray-300 hover:border-dashed shadow-md lg:p-4 sm:p-2 max-sm:px-2  max-md:py-2 transform transition-transform hover:scale-105 relative"
            >
              <div className="absolute top-3 right-3 max-md:top-1 max-md:right-1 border border-black rounded-full p-1 flex items-center justify-center z-20">
                <RiHeartAddLine className="text-gray-600 max-md:text-xs" />
              </div>

              <div className="absolute lg:top-2 lg:left-2 bg-green-500 text-white px-2 lg:py-2  rounded-br-xl rounded-tl-md text-xs font-semibold z-20">
              {  `${categories.discount} % OFF`}
              </div>

              <div className="relative overflow-hidden rounded-md mt-6 py-3">
                <img
                  src={`http://localhost:7000/upload/${categories.productFileName}`}
                  alt={categories.productName}
                  className="w-full h-20  md:h-36 object-contain transition-transform hover:scale-105"
                />
              </div>

              <h2 className="text-xs sm:text-sm md:text-base font-semibold mt-3 sm:mt-4 text-black hover:underline">
                {categories.productName}
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                {/* {categories.description} */}
                {categories.productName}
              </p>

              {/* <div className="flex items-center mt-2 sm:mt-3">
              {Array.from({ length: 5 }, (_, i) => (
                <MdOutlineStarPurple500
                  key={i}
                  className={`text-yellow-500 ${
                    i >= product.rating ? "text-gray-300" : ""
                  }`}
                />
              ))}
            </div> */}

              <div className="mt-3 sm:mt-4 flex items-center space-x-2">
                <div className="text-xs sm:text-sm md:text-lg font-bold text-gray-600">
                  ₹{categories.price}
                </div>
                {/* <div className="text-xs sm:text-sm text-gray-400 line-through">
                ₹{product.originalPrice.toFixed(2)}
              </div> */}
              </div>

              <div className="mt-4 sm:mt-5 flex items-center justify-between space-x-2">
                <button className="w-full py-1 sm:py-2 md:py-2 bg-transparent border border-blue-600 text-blue-600 text-xs sm:text-sm md:text-sm font-normal rounded-lg hover:bg-blue-500 hover:text-white transition">
                  Buy Now
                </button>
                <button className="w-full py-1 sm:py-2 md:py-2 bg-blue-600 text-white text-xs sm:text-sm md:text-sm font-medium rounded-lg hover:bg-blue-500 transition flex items-center justify-center">
                  <FaShoppingCart className="mr-2" />
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default ProductCategory;
