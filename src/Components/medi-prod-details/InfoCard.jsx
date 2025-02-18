import React from "react";

// Reusable InfoCard Component
const InfoCard = ({
  icon: Icon,
  title,
  description,
  bgColor = "bg-blue-400",
  hoverColor = "bg-blue-500",
  textColor = "text-gray-800",
  hoverTextColor = "text-blue-500",
}) => {
  return (
    <div
      className={`w-full sm:w-[45%] lg:w-[30%] xl:w-[23%] bg-white  border-2 border-gray-300 rounded-lg p-4 flex items-center space-x-4 hover:shadow-md transition-all duration-300 group`}
    >

      <div
        className={`flex items-center justify-center w-14 h-14 ${bgColor} rounded-full transition-colors duration-300 group-hover:${hoverColor}`}
      >
        <Icon
          className={`text-3xl ${textColor} transition-colors duration-300 group-hover:text-white`}
        />
      </div>

     
      <div className="flex flex-col">
        <h2
          className={`text-base md:text-lg lg:text-xl font-semibold ${textColor} transition-colors duration-300 group-hover:${hoverTextColor}`}
        >
          {title}
        </h2>
        <h4 className="text-xs md:text-sm text-gray-600">{description}</h4>
      </div>
    </div>
  );
};

export default InfoCard;
