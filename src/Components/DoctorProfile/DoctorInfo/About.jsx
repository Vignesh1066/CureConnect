import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Overview from "./Overview";
import axios from "axios";

const About = () => {
  const { _id } = useParams();
  const [doctorInfo, setDoctorInfo] = useState([]);

  const getByUpdate = async (_id) => {
    const authToken = localStorage.getItem("token");

    try {
      const res = await axios.get(
        `http://localhost:7000/admin/getadmin/user/?_id=${_id}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      setDoctorInfo([res.data]); 
    } catch (error) {
      console.log(error.response?.data?.Message || error.message);
    }
  };

  useEffect(() => {
    if (_id) {
      getByUpdate(_id);
    }
  }, [_id]);

  return (
    <div className="container mx-auto  w-[85%]">
      <div className=" p-2 rounded-lg shadow-sm mb-6">
        {doctorInfo.map((doctor) => (
          <Overview
            key={doctor._id}
            about={doctor.about}
            docName={`${doctor.firstName} ${doctor.lastName}`}
            category={doctor.category}
            displayName={doctor.displayName}
            experience={doctor.experience}
            hospitalName={doctor.hospitalName}
            UgDegree={doctor.UgDegree}
            PgDegree={doctor.PgDegree}
            UgCompletedAt={doctor.UgCompletedAt}
            PgCompletedAt={doctor.PgCompletedAt}
            Ugyear={doctor.Ugyear}
            Pgyear={doctor.Pgyear}
            experience1={doctor.experience1}
            experience2={doctor.experience2}
    
            clinicAddress={doctor.address} 
          />
        ))}
      </div>
    </div>
  );
};

export default About;
