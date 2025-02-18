import { FaShippingFast } from "react-icons/fa";
import Medicine from "./../../assets/medicine.jpg";
import React, { useState } from "react";
import { GoQuestion } from "react-icons/go";

const ProductDescription = () => {
  const [quantity, setQuantity] = useState(10);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const product = {
    name: "Benzaxapine Croplex",
    manufacturer: "Hamdard (Wakf) Laboratories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    features: [
      "Moisturization & Nourishment",
      "Blackhead Removal",
      "Anti-acne & Pimples",
      "Whitening & Fairness",
    ],
    price: 19,
    originalPrice: 45,
    discount: "10% off",
    inStock: true,
    sku: "201902-0057",
    packSize: "100g",
    unitCount: "200ml",
    country: "Japan",
    image: "path/to/medicine.jpg",
  };
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4  ">
        <div className="col-span-3 border-2 border-gray-300 rounded-lg p-4 flex flex-col sm:flex-row items-start">
          <img
            src={Medicine}
            alt={product.name}
            className="max-w-[300px] sm:w-6/12 h-[300px] object-cover rounded"
          />
          <div className="flex flex-col sm:ml-4 mt-4 sm:mt-0 ">
            <h2 className="text-xl sm:text-2xl font-bold text-black">
              {product.name}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Manufactured by {product.manufacturer}
            </p>
            <p className="text-sm sm:text-base text-gray-500 mt-4">
              {product.description}
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm sm:text-base text-black">
              Applied for:
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-1  rounded-lg p-4 sticky border-2 border-gray-300 top-4">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <h1 className="text-lg sm:text-2xl font-bold text-black">
              ${product.price}
            </h1>
            <h2 className="text-sm sm:text-lg text-black ml-0 sm:ml-4 line-through">
              ${product.originalPrice}
            </h2>
            <p className="text-green-600 font-bold text-sm sm:text-base ml-0 sm:ml-2">
              {product.discount}
            </p>
          </div>

          <div
            className={`bg-green-700 w-fit px-4 py-1 rounded mt-4 text-center ${
              product.inStock ? "text-white" : "text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </div>

          <div className="flex items-center mt-6 space-x-2">
            <button
              onClick={handleDecrease}
              className="bg-gray-300 px-3 py-1 rounded text-sm"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border border-gray-300 rounded text-sm"
            />
            <button
              onClick={handleIncrease}
              className="bg-gray-300 px-3 py-1 rounded text-sm"
            >
              +
            </button>
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded text-sm">
            Add To Cart
          </button>
          <ul className="mt-4 text-xs sm:text-sm text-gray-600 border border-gray-300 rounded">
            <li className="flex justify-between py-1 px-2">
              <strong>SKU</strong>
              <span>{product.sku}</span>
            </li>
            <li className="flex justify-between py-1 px-2">
              <strong>Pack Size</strong>
              <span>{product.packSize}</span>
            </li>
            <li className="flex justify-between py-1 px-2">
              <strong>Unit Count</strong>
              <span>{product.unitCount}</span>
            </li>
            <li className="flex justify-between py-1 px-2">
              <strong>Country</strong>
              <span>{product.country}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className=" mx-auto py-6">
        {/* Flex Parent Container */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* First Container: 75% width */}
          <div className="w-full lg:w-3/4 border border-gray-300 rounded-lg p-6">
            {/* Content for the first container */}
            <h1 className="text-2xl font-bold text-gray-800">
              Product Details
            </h1>
            <hr className="my-4 border-gray-300" />

            {/* Description Section */}
            <div>
              <h2 className="text-lg font-bold text-blue-700 mb-2">
                Description
              </h2>
              <p className="text-gray-700">
                Safi syrup is best for purifying the blood. As it contains
                herbal extracts it can cure indigestion, constipation, nose
                bleeds, and acne boils. It helps in the removal of toxins from
                the blood. It improves the complexion and gives you a healthy
                life.
              </p>
            </div>

            {/* Highlights Section */}
            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Highlights
              </h2>
              <ul className="list-none space-y-3 relative">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></span>
                  <p className="text-gray-600">
                    Safi syrup is known for its best purifying syrup for blood.
                  </p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></span>
                  <p className="text-gray-600">
                    It helps in eliminating the toxins from the bloodstream.
                  </p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></span>
                  <p className="text-gray-600">It improves digestion.</p>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></span>
                  <p className="text-gray-600">
                    It also helps in indigestion and constipation.
                  </p>
                </li>
              </ul>
            </div>

            {/* Add more content as needed */}
            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Directions for use
              </h2>
              <p className="text-gray-700">
                Adults: Take 2 tablespoons once a day in a glass full of water.
              </p>
            </div>

            {/* Additional sections */}
            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Storage</h2>
              <p className="text-gray-700">
                Store this syrup at room temperature protected from sunlight,
                heat, and moisture. Keep away from children and pets. Ensure
                that the unused medicine is disposed of properly.
              </p>
            </div>
          </div>

          {/* Second Container: Sticky and 25% width */}
          <div className="w-full lg:w-1/4">
            <div className="sticky top-4 border border-gray-300 rounded-lg p-4 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="text-black">
                <FaShippingFast className=" text-2xl" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black">
                    Free Shipping
                  </h4>
                  <p className="text-xs text-black">For orders from RS:50</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-black">
                <GoQuestion className=" text-2xl"   />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black">Support 24/7</h4>
                  <p className="text-xs text-black">Call us anytime</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-black">
                  <i className="fas fa-lock"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black">100% Safety</h4>
                  <p className="text-xs text-black">Only secure payments</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="text-black">
                  <i className="fas fa-tags"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-black">Hot Offers</h4>
                  <p className="text-xs text-black">Discounts up to 90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
