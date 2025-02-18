import React from 'react';

const Trust = () => {
  return (
    <div className="h-auto flex items-center justify-center lg:px-7 min-md:px-4  md:px-0">
      <div className="w-full flex flex-wrap md:flex-nowrap">
        {/* Left Content */}
        <div className="w-full ">
          <h1 className="text-3xl md:text-4xl mt-4 text-pretty">Get all your medicines.</h1>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Everytime. On time.</h1>

          <div className="text-gray-700 space-y-4">
            <div className="flex items-center mb-4 text-lg md:text-2xl">
              <span className="text-blue-500 font-bold mr-2">✓</span> Guaranteed availability
            </div>
            <div className="flex items-center mb-4 text-lg md:text-2xl">
              <span className="text-blue-500 font-bold mr-2">✓</span> Over 130,000+ genuine medicines
            </div>
            <div className="flex items-center mb-4 text-lg md:text-2xl">
              <span className="text-blue-500 font-bold mr-2">✓</span> Home delivery in 24hrs
            </div>
          </div>

          <div className="flex items-center space-x-4 text-lg py-4 md:text-xl">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
              Order Medicines
            </button>
          </div>

          <p className="text-gray-600 mb-6 text-base md:text-xl">
            Very Helpful! Consulting with a knowledgeable doctor online was easy, 
            and my prescription medicine arrived in just two days quick, 
            hassle-free, and smooth. Highly recommend!
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-3 md:mt-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/065/380/non_2x/medicine-delivery-icon-concept-free-vector.jpg"
            alt="Right Side"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Trust;
