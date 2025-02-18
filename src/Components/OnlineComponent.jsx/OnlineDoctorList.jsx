import { useEffect, useState } from "react";
import OnlineFilter from "./OnlineFilter";
import { useSearchParams } from "react-router-dom";
import HeadPart from "../heroSection/HeadPart";
import { TbFilterMinus, TbFilterPlus } from "react-icons/tb";
import Loader from "../ReusableComp/Loader";
import OnlineDoctorCard from "./OnlineDoctorCard";
import axios from "axios";

const OnlineDoctors = () => {
  const [nearDoctors, setNearDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
 

  // List of available categories
  const categories = ["Dentist", "Neurologist", "Cardiologist", "Urologist", "Orthopedic"];

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:7000/admin/addadmin")
    
      setNearDoctors(response.data);
      setFilteredDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      toast.error(error.response?.data?.message || "Error fetching doctors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      window.scrollTo(0,0)
      fetchDoctors();
    
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia("(max-width: 770px)").matches;
      setIsFilterCollapsed(isSmallScreen);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const applyFilters = (filters) => {
    const { gender, feeRange, category } = filters;
    const filtered = nearDoctors.filter((doctor) => {
      const matchesGender = gender ? doctor.gender === gender : true;
      const matchesFee =
        feeRange && doctor.consultationFee
          ? doctor.consultationFee >= feeRange[0] && doctor.consultationFee <= feeRange[1]
          : true;
      const matchesCategory = category ? doctor.category === category : true;

      return matchesGender && matchesFee && matchesCategory;
    });

    setFilteredDoctors(filtered);
  };

  return (
    <>
      <div>
        <HeadPart heading={"Doctors"} image={"https://www.shutterstock.com/shutterstock/photos/2188675669/display_1500/stock-photo-health-care-banner-medical-images-medical-background-images-2188675669.jpg"} />
      </div>

      <div className="main w-full h-screen py-5 flex">
        <div
          className={`transition-all duration-300 ${
            isFilterCollapsed ? "w-[50px]" : "lg:w-[25%]"
          } h-screen sticky top-0 border-r-2 rounded-lg p-4`}
        >
          <button
            className="w-full text-black text-xl text-center p-1 rounded-md"
            onClick={() => setIsFilterCollapsed(!isFilterCollapsed)}
          >
            {isFilterCollapsed ? <TbFilterPlus /> : <TbFilterMinus />}
          </button>

          {!isFilterCollapsed && (
            <OnlineFilter categories={categories} onApplyFilters={applyFilters} />
          )}
        </div>

        <div
          className={`transition-all duration-300 ${
            isFilterCollapsed ? "w-full" : "max-md:w-[100%] lg:w-[75%]"
          } h-screen overflow-y-auto p-4 space-y-4`}
        >
          {loading ? (
            <Loader/>
          ) : (
            filteredDoctors.map((Doctors) => (
              <OnlineDoctorCard
                key={Doctors._id}
                {...Doctors}
                image={Doctors.profileFileName}
                docName={`${Doctors.firstName} ${Doctors.lastName}`}
                qualification={`${Doctors.UgDegree}, ${Doctors.PgDegree}`}
                role={Doctors.category}
                location={Doctors.location}
                likes={Doctors.likes}
                feedback={Doctors.feedback}
                consultationFee={Doctors.consultationFee}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default OnlineDoctors;
