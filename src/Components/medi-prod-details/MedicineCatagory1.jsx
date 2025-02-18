import React from "react";

const ChildOfMedicate = ({ image }) => {
  return (
    <div className="flex-none w-56 h-64  ml-32   ">
      <img src={image} alt="carousel" className="w-full h-full shadow-md inherit border border-solid border-inherit object-cover rounded-lg" />
    </div>
  );
};



export default ChildOfMedicate;