import React from "react";

export function MediHero() {
  return (
    
    <div className="bg-blue-800 text-white min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-relaxed">
          Get Medicines Fast with <br />
          <span className="text-blue-500">Superfast Delivery</span> in Your City
        </h1>
        <p className="text-sm md:text-lg mt-4 font-medium">
          ONLY ON <span className="text-blue-500 font-bold">PHARMEASY</span>
        </p>
      </header>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Feature 1 */}
        <div className="bg-blue-500 rounded-lg p-4 shadow-md flex items-center justify-between hover:shadow-lg transition-transform transform hover:scale-105">
          <div>
            <h3 className="text-lg font-semibold">Cash on Delivery</h3>
            <p className="text-sm">On all your orders</p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/10551/10551890.png"
            alt="Cash on Delivery"
            className="w-14 h-14 object-contain"
          />
        </div>

        {/* Feature 2 */}
        <div className="bg-blue-500 rounded-lg p-4 shadow-md flex items-center justify-between hover:shadow-lg transition-transform transform hover:scale-105">
          <div>
            <h3 className="text-lg font-semibold">Express Delivery</h3>
            <p className="text-sm">Free* and fast in your city</p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9561/9561839.png"
            alt="Express Delivery"
            className="w-14 h-14 object-contain"
          />
        </div>

        {/* Feature 3 */}
        <div className="bg-blue-500 rounded-lg p-4 shadow-md flex items-center justify-between hover:shadow-lg transition-transform transform hover:scale-105">
          <div>
            <h3 className="text-lg font-semibold">Easy Returns</h3>
            <p className="text-sm">No questions asked</p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9226/9226484.png"
            alt="Easy Returns"
            className="w-14 h-14 object-contain"
          />
        </div>
      </div>

      {/* Discounts Section */}
      <p className="text-sm md:text-base mt-14 font-medium">
        ORDER & AVAIL MAX <span className="text-blue-500">DISCOUNTS</span>
      </p>

      {/* Search Section */}
      <section className="mt-12 w-full max-w-md">
        <div className="border rounded-lg p-4 bg-white shadow-lg">
          <div className="flex items-center border border-blue-500 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Type your search here..."
              className="flex-grow px-4 py-2 focus:outline-none text-black"
            />
            <button className="bg-blue-500 text-white px-6 py-2 hover:bg-blue-600 transition duration-300">
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MediHero;
