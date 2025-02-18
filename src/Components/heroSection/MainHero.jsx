import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=1xw:0.8425829875518672xh;center,top&resize=1200:*",
    "https://img.freepik.com/free-photo/accompaniment-abortion-process_23-2149656077.jpg?uid=R162550578&ga=GA1.1.1965850165.1734144540&semt=ais_hybrid",
    "https://bethesdahealth.org/wp-content/uploads/2017/11/iStock-177732003-scaled.jpg",
    "https://bethesdahealth.org/wp-content/uploads/2017/11/iStock-177732003-scaled.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full h-[95vh] bg-gray-100  max-sm:h-[500px] flex justify-center items-center">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 w-auto h-auto bg-cover bg-center bg-no-repeat sm:bg-fixed max-sm:bg-top max-sm:bg-cover transition-all duration-500"
          style={{
            backgroundImage: `url(${images[currentIndex]})`, // Fixed syntax for dynamic URL
          }}
        ></div>

        <div className="w-full h-full bg-black absolute top-0 bg-opacity-65 flex flex-col justify-center text-center items-center px-20 max-sm:px-5">
          <h1 className="text-2xl font-extrabold sm:text-5xl text-white">
          Consultation With Our Doctor 
            <br />
            <strong className="mt-4 font-extrabold text-white sm:block">
              AnyWhere , Anytime 
            </strong>
          </h1>
          <Link>
            <span
              href="#"
              className="block w-full rounded bg-blue-500 mt-8 px-8 py-3  font-semibold text-white shadow focus:outline-none focus:ring sm:w-auto hover:bg-blue-700 transition"
            >
           Get Started 
            </span>
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-orange-400" : "bg-white"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
