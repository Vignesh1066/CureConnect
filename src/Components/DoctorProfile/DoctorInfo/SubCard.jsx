import React from "react";
import {
  primaryColor,
  whiteColor,
} from "../../ReusableComp/ColorComp";

export const Button = ({ btnName }) => {
  return (
    <button
      className={`min-w-24 rounded-md font-medium p-2 bg-blue-900 hover:bg-blue-500 text-${whiteColor}`} 
    >
      {btnName}
    </button>
  );
};

export const SubCard = ({ props, className }) => {
  return (

    <div className={className}>
      <h2>{props.image}</h2>
      <p>{props.title}</p>
    </div>
    
  );
};
