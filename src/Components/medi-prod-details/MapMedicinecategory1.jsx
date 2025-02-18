//First six category
import React from "react";
import childcare from "../../assets/childcare.png";
// import vitandmin from "../assets/vitandmin.png";
// import image24 from "../assets/image24.png";
// import Group3 from "../assets/Group 3.png";
// import image23 from "../assets/image23.png";
// import image22 from "../assets/image22.png";
import ChildOfMedicate from "./MedicineCatagory1";

const MapMedicineCategory = () => {
  const images = [
    childcare,
    vitandmin,
    image24,
    Group3,
    image23,
    image22
  ];

  return (
    <div className="flex overflow-x-auto space-x-4 py-4 mt-40">
      {images.map((image, index) => (
        <ChildOfMedicate key={index} image={image} />
      ))}
    </div>
  );
};

export default MapMedicineCategory;
