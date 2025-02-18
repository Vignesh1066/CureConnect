// ApproachToHealthcare.js
import React from "react";

const ApproachToHealthcare = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Our approach to healthcare
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Providing high-quality, trusted, and accessible healthcare is our
          reason for being
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Connect */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.practo.com/providers/static/images/pages/company/about/connect.svg"
              alt="Connect Icon"
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800">Connect</h3>
            <p className="text-gray-600 mt-2">
              We understand healthcare goes beyond signs, symptoms, diagnosis,
              and treatment. It’s about the deep connection between doctors and
              patients 
            </p>
          </div>

          {/* Trust */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.practo.com/providers/static/images/pages/company/about/trust.svg"
              alt="Trust Icon"
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800">Trust</h3>
            <p className="text-gray-600 mt-2">
              CureConnect works on trust. We are aware of the responsibility placed
              on us by patients and doctors. We always do everything possible
              to uphold this trust.
            </p>
          </div>
          
          {/* Transparency */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.practo.com/providers/static/images/pages/company/about/transparency.svg"
              alt="Transparency Icon"
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              Transparency
            </h3>
            <p className="text-gray-600 mt-2">
              We believe in full disclosure, communicating openly, and holding
              ourselves to the highest ethical standards confidentiality and integrity of our users.
            </p>
          </div>
        </div>

        <div className="w-full h-[2px] bg-gray-200 hidden md:block"></div>
        {/* Privacy Section */}
        <h3 className=" mt-20 text-3xl font-bold text-gray-900 mb-6">
          Data privacy and security is our top priority
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Data privacy and security have always served as one of the founding
          philosophies of our healthcare services, safeguarding the
          confidentiality and integrity of our users.
        </p>

        {/* Privacy Features */}
        <div className=" w-full flex justify-center items-center">
          {/* Encryption */}
          <div className="flex flex-col items-center">
            <img
              src="https://www.practo.com/providers/static/images/pages/company/about/security.png"
              alt="Encryption Icon"
              className="mb-4 w-[60%]"
            />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproachToHealthcare;
