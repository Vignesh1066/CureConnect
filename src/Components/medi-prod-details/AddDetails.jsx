import React, { useRef } from "react";
import CardComponent from "./Dealoftheday";

const DealOfDay = () => {
  const MediProduct = [
    {
      id: 1,
      image:
        "https://doccure.dreamstechnologies.com/react/template/33a63c7810024c33366f.jpg",
      title: "Benzaxapine Croplex",
      subtitle: "Used for schizophrenia, A mental disorder..",
      originalPrice: 1050,
      offerPrice: 950,
    },
    {
      id: 2,
      image:
        "https://doccure.dreamstechnologies.com/react/template/a24e0e9a9e8befde9e53.jpg",
      title: "Rapalac Neuronium",
      subtitle: "Used to too much acid in the stomach.",
      originalPrice: 700,
      offerPrice: 550,
    },
    {
      id: 3,
      image:
        "https://doccure.dreamstechnologies.com/react/template/950acc7c78fa529f737e.jpg",
      title: "Ombinazol Bonibamol",
      subtitle: "Used in the treatment of Heartburn, Acidity.",
      originalPrice: 1500,
      offerPrice: 1300,
    },
    {
      id: 4,
      image:
        "https://doccure.dreamstechnologies.com/react/template/6f859225d7f2e3ab9eb2.jpg",
      title: "Acetrace Amionel",
      subtitle: "Used to relieve pain and bone or soft tissue injury.",
      originalPrice: 1000,
      offerPrice: 800,
    },
    {
      id: 5,
      image:
        "https://doccure.dreamstechnologies.com/react/template/f662c755ed6bfc1a469b.jpg",
      title: "Ergorinex Caffeigestin",
      subtitle:
        "It is usually taken at the first sign of a migraine headache. ",
      originalPrice: 200,
      offerPrice: 150,
    },
    {
      id: 6,
      image:
        "https://doccure.dreamstechnologies.com/react/template/4de7eb83d9f8b157b06c.jpg",
      title: "Alispirox Aerorenone",
      subtitle: "Home gardens for insect control",
      originalPrice: 500,
      offerPrice: 250,
    },
    {
      id: 7,
      image:
        "https://doccure.dreamstechnologies.com/react/template/381fb4cde2e86377f710.jpg",
      title: "Lysofranil Dorzostin",
      subtitle: " To prevent skin irritation",
      originalPrice: 300,
      offerPrice: 250,
    },
    {
      id: 8,
      image:
        "https://doccure.dreamstechnologies.com/react/template/beed4d1421cd22a43cb9.jpg",
      title: "Neubide Aborase",
      subtitle: "It is used to treat seizures. ",
      originalPrice: 300,
      offerPrice: 150,
    },
    {
      id: 9,
      image:
        "https://doccure.dreamstechnologies.com/react/template/3a1b9f932af8cd40f6c0.jpg",
      title: "Cordacriptine Mardipine",
      subtitle: "improves insulin resistance and treats type 2 diabetes.",
      originalPrice: 1000,
      offerPrice: 750,
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 800;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 800;
    }
  };

  return (
    <div className=" px-3 ">
      <div className="container mx-auto   relative">
        <div className="cont w-full px-10 flex justify-between items-center ">
          <h2 className="text-2xl font-bold mb-6 ">
            <span>Deal of the Day</span>
          </h2>
   
        </div>

        <div
          className="flex overflow-x-auto scrollbar-hide space-x-6 "
          style={{ width: "calc(100% - 50px)" }}
          ref={scrollRef}
        >
          {MediProduct.map((product) => (
            <div className="flex-shrink-0 w-[calc(50%-2rem)]">
              {" "}
              {/* Adjust card width */}
              <CardComponent
                key={product.id}
                image={product.image}
                title={product.title}
                subtitle={product.subtitle}
                originalPrice={product.originalPrice}
                offerPrice={product.offerPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealOfDay;
