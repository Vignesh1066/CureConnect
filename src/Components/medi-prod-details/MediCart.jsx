import React, { useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Systane Gel Eye Drops 10ml",
      brand: "Alcon Laboratories",
      type: "Bottle of 10 ML",
      price: 542.03,
      mrp: 631.0,
      discount: "14.10%",
      image:
        "https://assets.truemeds.in/Images/ProductImage/TM-SOON2-000544/morr-pro-hair-serum-60ml_morr-pro-hair-serum-60ml--TM-SOON2-000544_1.png?width=240",
      quantity: 1,
    },
    {
      id: 2,
      name: "Ubicar Tablet 10",
      brand: "Fourrts India Laboratories Pvt. Ltd",
      type: "Strip of 10 Units",
      price: 331.17,
      mrp: 399.0,
      discount: "17%",
      image:
        "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-042980/VITAMIN-A-CHEWABLE-50000-IU-Tablet-10_1.webp?width=240",
      quantity: 1,
    },
    {
      id: 3,
      name: "Rejoint Uc Capsule 10",
      brand: "Abbott Healthcare Pvt. Ltd",
      type: "Strip of 10 Units",
      price: 843.28,
      mrp: 1016.0,
      discount: "17%",
      image:
        "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-021892/limcee-orange-flavour-chewable-tablet-15_limcee-orange-flavour-chewable-tablet-15--TM-TACR1-021892_1.png?width=240",
      quantity: 1,
    },
    {
      id: 4,
      name: "Rejoint Uc Capsule 10",
      brand: "Abbott Healthcare Pvt. Ltd",
      type: "Strip of 10 Units",
      price: 843.28,
      mrp: 1016.0,
      discount: "17%",
      image:
        "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-021892/limcee-orange-flavour-chewable-tablet-15_limcee-orange-flavour-chewable-tablet-15--TM-TACR1-021892_1.png?width=240",
      quantity: 1,
    },
    {
      id: 5,
      name: "Rejoint Uc Capsule 10",
      brand: "Abbott Healthcare Pvt. Ltd",
      type: "Strip of 10 Units",
      price: 843.28,
      mrp: 1016.0,
      discount: "17%",
      image:
        "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-021892/limcee-orange-flavour-chewable-tablet-15_limcee-orange-flavour-chewable-tablet-15--TM-TACR1-021892_1.png?width=240",
      quantity: 1,
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalDiscount = cartItems.reduce(
    (total, item) => total + (item.mrp - item.price) * item.quantity,
    0
  );

  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 min-h-screen p-4 lg:px-16 gap-4">
      {/* Cart Items Section */}
      <div className="lg:w-3/4 w-full">
        <h2 className="text-2xl font-semibold mb-4">
          {cartItems.length} Items in your cart
        </h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border-2 border-gray-300 p-4 rounded-md mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div className="flex sm:flex-row flex-col items-start sm:items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded"
              />
              <div>
                <h3 className="text-md font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.brand}</p>
                <p className="text-sm text-gray-500">{item.type}</p>
                <p className="text-md font-semibold text-blue-500 mt-1">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 line-through">
                  MRP ₹{(item.mrp * item.quantity).toFixed(2)}
                </p>
                <p className="text-sm text-blue-900">{item.discount} OFF</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <HiOutlineMinusCircle
                onClick={() => handleDecrease(item.id)}
                className={`cursor-pointer text-xl ${
                  item.quantity === 1 ? "text-gray-400" : "text-gray-700"
                }`}
              />
              <span className="border border-blue-500 px-4 text-lg font-semibold">
                {item.quantity}
              </span>
              <FiPlusCircle
                onClick={() => handleIncrease(item.id)}
                className="cursor-pointer text-xl text-gray-700"
              />
            </div>
          </div>
        ))}

        {/* Add More Medicines Button */}
        <div className="flex justify-center items-center border-2 border-blue-500 text-blue-500 py-2 rounded-md font-semibold cursor-pointer">
          <FiPlusCircle className="text-xl" />
          <span className="ml-2">
            <Link to={""}>Add More Medicines</Link>
          </span>
        </div>
      </div>

      {/* Bill Details Section */}
      <div className="lg:w-1/4 w-full">
        <div className="bg-white border-2 sticky top-16 border-gray-300 shadow-lg rounded-md p-4">
          <div className="flex justify-center items-center py-3 text-blue-500 gap-2">
            <FaShippingFast className="text-2xl" />
            <p>Yay! Get FREE delivery on this order.</p>
          </div>
          <h3 className="text-lg font-semibold mb-4">Bill Details</h3>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Total Price</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Total Discount</span>
            <span className="text-blue-900">-₹{totalDiscount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Delivery charge</span>
            <span className="text-blue-900">FREE</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Estimated Payable</span>
            <span>₹{(totalPrice - totalDiscount).toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
            Add Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
