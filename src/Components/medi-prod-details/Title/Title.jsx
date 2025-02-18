import React from "react";

const SectionHeader = ({ title }) => {
  return (
 <div className="flex items-center justify-center lg:mb-10 max-md:mb-5 px-6 sm:px-12 md:px-16 lg:px-24">
  <div className="h-[2px] sm:h-[3px] lg:h-[4px] bg-gray-200 flex-grow"></div>
  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-800 mx-2 sm:mx-4">
    {title}
  </h2>
  <div className="h-[2px] sm:h-[3px] lg:h-[4px] bg-gray-200 flex-grow"></div>
</div>

  );
};

export default SectionHeader;
