import React from "react";
import ProductCategory from "../medi-prod-details/CategoryCard";
import personalcare from "../../assets/personal-hygiene (1).png";
import ayurvedic from "../../assets/ayurveda (2).png";
import babycare from "../../assets/maternity.png";
import medication from "../../assets/medicine.png"
import vitamin from "../../assets/supplement.png"
import device from "../../assets/glucosemeter.png"
import pet from "../../assets/pet.png"
import { Outlet } from "react-router-dom";
import Hero from "../heroSection/MainHero";
const AllCategory = () => {
  return (
    <div>
      <div className="main min-h-screen">
        <section>
          <div className="hero mb-4">
     <Hero/>
          </div>
        </section>

        <section>
          <div className="Categoryproduct-1   sm:px-1  mt-5">
            <ProductCategory
              bgColor={"bg-gradient-to-t from-blue-400 to-blue-600"}
              iconurl={personalcare}
              categoryName={"Best Sellers in Personal Care"}
              category = {"Mother and Baby Care"}
            />
          </div>
        </section>

        <section>
          <div className="Categoryproduct-2   sm:px-1  mt-5">
            <ProductCategory
              bgColor={"bg-gradient-to-b from-blue-400 to-blue-600"}
              iconurl={ayurvedic}
              categoryName={"Ayurvedic & Healthcare "}
              category = {"Personal Care"}
            />
          </div>
        </section>

        <section>
          <div className="Categoryproduct-3  sm:px-1  mt-5">
            <ProductCategory
              bgColor={"bg-gradient-to-t from-blue-400 to-blue-600"}
              iconurl={babycare}
              categoryName={"Baby & Mother Care "}
              category = {"Medical Devices"}
            />
          </div>
        </section>
        <section>
          <div className="Categoryproduct-4  sm:px-1  mt-5">
            <ProductCategory
              bgColor={"bg-gradient-to-t from-blue-400 to-blue-600"}
              iconurl={medication}
              categoryName={"Medication "}
              category = {"Mother and Baby Care"}
            />
          </div>
        </section>
        <section>
          <div className="Categoryproduct-5  sm:px-1  mt-5">
            <ProductCategory
              bgColor={"bg-gradient-to-b from-blue-400 to-blue-600"}
              iconurl={vitamin}
              categoryName={"Vitamin and Supplements "}
              category = {"Medical Devices"}
            />
          </div>
        </section>
        <section>
          <div className="Categoryproduct-6  sm:px-1  mt-5">
            <ProductCategory
              bgColor={"bg-gradient-to-t from-blue-400 to-blue-600"}
              iconurl={device}
              categoryName={"Devices "}
              category = {"Personal Care"}
            />
          </div>
        </section>
        <section>
          <div className="Categoryproduct-7  sm:px-1  mt-5">
            <ProductCategory
              bgColor={"bg-gradient-to-b from-blue-400 to-blue-600"}
              iconurl={pet}
              categoryName={"Pets Care "}
              category = {"Mother and Baby Care"}
            />
          </div>
        </section>
      </div>
    <Outlet/>
    </div>
  );
};

export default AllCategory;
