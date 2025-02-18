import { FaStar } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import Video from "../../assets/Video.mp4";

const AppointMentInfo = () => {
  return (
    <div className="font-sans w-full flex flex-col items-center px-4 md:px-10 lg:px-24">
      <main className="w-full">
        <div className="main flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-10 gap-10 md:gap-20 lg:gap-40">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Instant appointment with{" "}
              <span className="text-blue-600">doctors.</span>
              <br />
              <span className="text-green-600">Guaranteed.</span>
            </h1>
            <ul className="mt-5 space-y-3 text-sm md:text-base">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span> 100,000 Verified
                doctors
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span> 3M+ Patient
                recommendations
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span> 25M Patients/year
              </li>
            </ul>
            <button className="mt-5 px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">
              Find me the right doctor
            </button>
            <div className="flex flex-row mt-8 gap-1 justify-center md:justify-start text-green-800">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-gray-700 mt-4 text-sm md:text-base max-w-xs md:max-w-md mx-auto md:mx-0">
              "Very helpful. Far easier than doing same things on computer.
              Allows quick and easy search with speedy booking."
            </p>
            <div className="mt-4 flex items-center justify-center md:justify-start text-gray-800">
              <IoPersonCircleSharp size={25} />
              <span className="ml-2 text-sm md:text-base">Amit Sharma</span>
            </div>
          </div>

          {/* Video Content */}
          <div className="w-full md:w-1/2">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] lg:max-w-[400px]">
              <video
                src={Video}
                autoPlay
                loop
                muted
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppointMentInfo;
