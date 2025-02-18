import React, { useState, useEffect } from "react";
import Loader from "../../ReusableComp/Loader";

const Overview = ({
  docName,
  category,
  about,
  UgDegree,
  PgDegree,
  UgCompletedAt,
  PgCompletedAt,
  Ugyear,
  Pgyear,
  experience1,
  experience2,
  clinicAddress,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 400);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loader/>; 
  }

  return (
    <div className="bg-white w-full rounded-lg p-8 mb-6 border border-gray-300 shadow-lg">
      <div className="mb-4 py-4">
        <h2 className="text-2xl font-bold text-gray-950">{docName}</h2>
        <p className="text-md text-gray-700 italic">{category}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-950 mb-2">About Me</h3>
        <p className="text-gray-700">{about || "No information provided"}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-950 mb-2">Education</h3>
        <ul className="list-disc ml-6 text-gray-800">
          <li>
            <span className="font-medium">{UgDegree}</span>, {UgCompletedAt} ({Ugyear})
          </li>
          <li>
            <span className="font-medium">{PgDegree}</span>, {PgCompletedAt} ({Pgyear})
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-950 mb-2">Work & Experience</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>{experience1 || "No experience listed"}</li>
          <li>{experience2 || "No experience listed"}</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-950 mb-2">Clinic Address</h3>
        <p className="text-gray-700">{clinicAddress || "Address not provided"}</p>
      </div>
    </div>
  );
};

export default Overview;
