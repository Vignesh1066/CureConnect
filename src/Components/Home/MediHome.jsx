import React from "react";
import MediHero from "../medi-prod-details/MediHero";
import FeaturedBrands from "../medi-prod-details/FeaturedBrands";
import OurProductBrands from "../medi-prod-details/PartnerBrands";
import ProductCards from "../medi-prod-details/ProductCard";
import InfoMap from "../medi-prod-details/InfoMap";
import DealOfDay from "../medi-prod-details/AddDetails";
import Trust from "../medi-prod-details/Trust";
import personalcare from "../../assets/personal-hygiene (1).png";
import ayurvedic from "../../assets/ayurveda (2).png";
import babycare from "../../assets/maternity.png";
import PopularCategory1 from "../medi-prod-details/PopularCategory-1";
import PopularCategory2 from "../medi-prod-details/PopularCategory-2";
import ProductCategory from "../medi-prod-details/CategoryCard";

const MedicineHome = () => {
  return (
    <div className="main min-h-screen">
      <section>
        <div className="hero mb-4">
          <MediHero />
        </div>
      </section>

      <section>
        <div className="health-concern max-md:px-1 py-6 px-4 sm:px-6 lg:px-10 mt-5">
          <FeaturedBrands />
        </div>
      </section>
      <section>
        <div className="PopularCategory max-md:px-1 py-6 px-4 sm:px-6 lg:px-10 mt-5">
          <PopularCategory1 />
        </div>
      </section>

      <section>
        <div className="Categoryproduct-1   sm:px-1  mt-5">
          <ProductCategory
            bgColor={"bg-gradient-to-t from-blue-400 to-blue-600"}
            iconurl={personalcare}
            categoryName={"Best Sellers in Personal Care"}
            category = {"Personal Care"}
          />
        </div>
      </section>
      <section>
        <div className="product  sm:px-1 lg:px-10 mt-5">
          <ProductCards />
        </div>
      </section>
      <section>
        <div className="PopularCategory max-md:px-1 py-6 px-4 sm:px-6 lg:px-10 mt-5">
          <PopularCategory2 />
        </div>
      </section>
   
      <section>
        <div className="Categoryproduct-2   sm:px-1  mt-5">
          <ProductCategory
            bgColor={"bg-gradient-to-b from-blue-400 to-blue-600"}
            iconurl={ayurvedic}
            categoryName={"Ayurvedic & Healthcare "}
            category = {"Ayurvedic and Herbal Products"}
          />
        </div>
      </section>
      <section>
        <div className="featured-brands mt-5">
          <OurProductBrands />
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
        <div className="day-deals py-6 px-4 sm:px-6 lg:px-10 mt-5">
          <DealOfDay />
        </div>
      </section>
      <section>
        <div className="Trust  px-4 sm:px-6 lg:px-10 mt-5">
          <Trust />
        </div>
      </section>

      <section>
        <div className="info py-6 px-4 sm:px-6 lg:px-10 mt-5">
          <InfoMap />
        </div>
      </section>
    </div>
  );
};

export default MedicineHome;
