import React from "react";
import MainHero from "../heroSection/MainHero";
import Specialities from "./Specialities/Specialities";
import Steps from "./Step";
import Services from "./Specialities/ServicesCard";


const Home = () => {
  return (
    <div className="relative main min-h-screen">
      <section>
        <div className="hero">
          <MainHero />
        </div>
      </section>
{/* //"services py-5 md:py-7 lg:py-5 mt-3 md:mt-5 lg:mt-4 px-4 md:px-10 lg:px-24" */}
      <section className="w-full">
        <div className="mx-20 max-[425px]:mx-5 max-md:mx-12 max-lg:mx-14 max-xl:mx-16">
          <Services />
        </div>
      </section>

      <section className="w-full">
        <div className="mx-20 max-[425px]:mx-5 max-md:mx-12 max-lg:mx-14 max-xl:mx-16">
          <Specialities topic={"Clinic & Specialities"} />
        </div>
      </section>

      {/* steps py-5 md:py-7 lg:py-5 mt-3 md:mt-5 lg:mt-4 px-4 md:px-10 lg:px-24 */}
      <section className="w-full">
        <div className="mx-20 max-[425px]:mx-5 max-md:mx-12 max-lg:mx-14 max-xl:mx-16">
          <Steps />
        </div>
      </section>
    </div>
  );
};

export default Home;
