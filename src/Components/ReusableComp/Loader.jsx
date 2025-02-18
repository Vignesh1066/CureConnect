import React from 'react';
import logo from '../../assets/CC_logo3.png';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div
        className="relative w-48 h-48"
        style={{
          background: 'linear-gradient(30deg, rgb(121, 132, 148) 25%, rgb(91, 99, 112) 50%, rgb(140, 148, 160) 75%, rgb(121, 132, 148))',
          backgroundSize: '200% 100%',
          animation: 'colorShift 4s linear infinite, scaleUp 2s ease-in-out infinite',
          WebkitMaskImage: `url(${logo})`, // Correct interpolation
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          maskImage: `url(${logo})`, // Correct interpolation
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
        }}
      ></div>
      <style>
        {`
          @keyframes colorShift {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
          @keyframes scaleUp {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
