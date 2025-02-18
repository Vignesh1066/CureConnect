import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import DoctorCard from "./DoctorCard";
import { TbFilterMinus, TbFilterPlus } from "react-icons/tb";
import HeadPart from "../heroSection/HeadPart";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../ReusableComp/Loader";

const apiUrl = "http://localhost:7000";

const Doctors = () => {
  const [nearDoctors, setNearDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state for the loader
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const category = searchParams.get("category");
  const authToken = localStorage.getItem("token");

  // Function to fetch doctors based on location and category
  const fetchDoctors = async () => {
    setLoading(true); // Show loader before fetching data
    try {
      const response = await axios.get(`${apiUrl}/admin/neardoctors`, {
        params: {
          location,
          category,
        },
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setNearDoctors(response.data);
      setFilteredDoctors(response.data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      toast.error(error.response?.data?.message || "Error fetching doctors");
    } finally {
      setLoading(false); // Hide loader after fetching data
    }
  };

  useEffect(() => {
    window.scrollTo(0,0)
    if (location || category) {
      fetchDoctors();
    }
  }, [location, category]);

  // Auto-close filter on small screens
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia("(max-width: 770px)").matches;
      setIsFilterCollapsed(isSmallScreen); // Collapse filter if screen is small
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  // Function to apply filters
  const applyFilters = (filters) => {
    const { gender, availability, feeRange, date } = filters;

    const filtered = nearDoctors.filter((doctor) => {
      const matchesGender = gender ? doctor.gender === gender : true;
      const matchesAvailability = availability.length
        ? availability.some((a) => doctor.availability.includes(a))
        : true;
      const matchesFee =
        feeRange && doctor.consultationFee
          ? doctor.consultationFee >= feeRange[0] && doctor.consultationFee <= feeRange[1]
          : true;
      const matchesDate = date ? doctor.availableDates.includes(date) : true;

      return matchesGender && matchesAvailability && matchesFee && matchesDate;
    });

    setFilteredDoctors(filtered);
  };

  return (
    <>
      <div>
        <HeadPart heading={"Doctor Profile"} image={"https://www.shutterstock.com/shutterstock/photos/2188675669/display_1500/stock-photo-health-care-banner-medical-images-medical-background-images-2188675669.jpg"} />
      </div>

      <div className="main w-full h-screen py-5 flex">
        {/* Filter Section */}
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

          {!isFilterCollapsed && <Filter onApplyFilters={applyFilters} />}
        </div>

        {/* Doctors Listing Section */}
        <div
          className={`transition-all duration-300 ${
            isFilterCollapsed ? "w-full" : "max-md:w-[100%] lg:w-[75%]"
          } h-screen overflow-y-auto p-4 space-y-4`}
        >
          {loading ? ( // Show loader while loading
            <Loader />
          ) : (
            filteredDoctors.map((Doctors) => (
              <DoctorCard
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

export default Doctors;
