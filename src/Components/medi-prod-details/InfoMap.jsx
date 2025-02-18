import React from "react";
import InfoCard from "./InfoCard"; // Import the reusable InfoCard component
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { SiHelpdesk } from "react-icons/si";

const InfoMap = () => {

  const cardsData = [
    {
      icon: FaShippingFast,
      title: "Free Delivery",
      description: "For all orders over RS:120",
    },
    {
      icon: RiSecurePaymentLine,
      title: "Safe Payment",
      description: "100% secure payment",
    },
    {
      icon: BsCashCoin,
      title: "Shop With Confidence",
      description: "If goods have problems",
    },
    {
      icon: SiHelpdesk,
      title: "Friendly Services",
      description: "30 day satisfaction guarantee",
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center gap-6 p-6 ">
      {cardsData.map((card, index) => (
        <InfoCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default InfoMap;
