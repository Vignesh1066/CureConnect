import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { RiHeartAddLine } from 'react-icons/ri'

const ProductDesign = ({product}) => {

  return (
    
        <div
            className="product-card bg-white rounded-lg border-2 border-gray-300 hover:border-dashed shadow-md lg:p-4 sm:p-2 max-sm:px-2  max-md:py-2 transform transition-transform hover:scale-105 relative"
          >
            <div className="absolute top-3 right-3 max-md:top-1 max-md:right-1 border border-black rounded-full p-1 flex items-center justify-center z-20">
              <RiHeartAddLine className="text-gray-600 max-md:text-xs" />
            </div>

            <div className="absolute lg:top-2 lg:left-2 bg-green-500 text-white px-2 lg:py-2  rounded-br-xl rounded-tl-md text-xs font-semibold z-20">
              { `${product.discount} % OFF`}
            </div>

            <div className="relative overflow-hidden rounded-md mt-6 py-3">
              <img
              src={`http://localhost:7000/upload/${product.productFileName}`}
                alt={product.name}
                className="w-full h-20  md:h-36 object-contain transition-transform hover:scale-105"
              />
            </div>

            <h2 className="text-xs sm:text-sm md:text-base font-semibold mt-3 sm:mt-4 text-black hover:underline">
                {product.productName}
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
              {product.subDescription}
            </p>

            <div className="flex items-center mt-2 sm:mt-3">
              {Array.from({ length: 5 }, (_, i) => (
                <MdOutlineStarPurple500
                  key={i}
                  className={`text-yellow-500 ${
                    i >= product.ratings ? "text-gray-300" : ""
                  }`}
                />
              ))}
            </div>

            <div className="mt-3 sm:mt-4 flex items-center space-x-2">
              <div className="text-xs sm:text-sm md:text-lg font-bold text-gray-600">
                ₹{product.price.toFixed(2)}
              </div>
              {/* <div className="text-xs sm:text-sm text-gray-400 line-through">
                ₹{product.Price.toFixed(2)}
              </div> */}
            </div>

            <div className="mt-4 sm:mt-5 flex items-center justify-between space-x-2">
              <button className="w-full py-1 sm:py-2 md:py-2 bg-transparent border border-blue-600 text-blue-600 text-xs sm:text-sm md:text-sm font-normal rounded-lg hover:bg-blue-500 hover:text-white transition">
                Buy Now
              </button>
              <button
                className="w-full py-1 sm:py-2 md:py-2 bg-blue-600 text-white text-xs sm:text-sm md:text-sm font-medium rounded-lg hover:bg-blue-500 transition flex items-center justify-center"
                // onClick={(e) => handleAddToCart(product.image, e)}
              >
                <FaShoppingCart className="mr-2" />
                Add
              </button>
            </div>
          </div>
    
  )
}

export default ProductDesign
