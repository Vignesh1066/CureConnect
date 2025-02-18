import React from "react";
import OnlineCosultationHero from "../heroSection/OnlineConsultationHero";
import HowItWorks from "../pages/OnlineComponTwo";
import ApproachToHealthcare from "../pages/OnlineCompoOne";

const OnlineConsultHome = () => {
  return (
    <div className="main min-h-screen">
      <section>
        <div className="hero mb-4">
          <OnlineCosultationHero />
        </div>

      </section>

            
      <section className="w-full">
        <div className="mx-20 max-[425px]:mx-5 max-md:mx-12 max-lg:mx-14 max-xl:mx-16">
          <HowItWorks/>
        </div>
      </section>
      <section className="w-full">
        <div className="mx-20 max-[425px]:mx-5 max-md:mx-12 max-lg:mx-14 max-xl:mx-16">
          <ApproachToHealthcare/>
        </div>
      </section>
    </div>
  );
};

export default OnlineConsultHome;
