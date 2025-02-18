import React from "react";
import { FcSearch, FcCalendar, FcBusinessman, FcCheckmark } from "react-icons/fc"; // Import icons

const Steps = () => {
  return (<div style={{ display: "flex", alignItems: "center", padding: "10 px 20px" }}>
    <div style={{ flex: "1", textAlign: "center" }}>
      <img
        src="https://img.freepik.com/premium-photo/portrait-confident-young-female-doctor-white-background-ai-generated_943087-2803.jpg?w=360"
        alt="Doctor"
        style={{
          borderRadius: "5px",
          width: "70%",
          maxWidth: "250px",
          marginLeft: "60px", 
          marginTop:"20px"
        }}
      />
    </div>
      <div style={{ flex: "2", paddingLeft: "20px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "1.8rem", textAlign: "left" }}>
          4 Easy Steps to Get Your Solution
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FcSearch size={30} />
            <div>
              <h3 style={{ margin: "0", fontSize: "1.2rem" }}>Search Doctors</h3>
              <p style={{ margin: "5px 0", fontSize: "0.9rem" }}>
                Find the best doctors for your needs.
              </p>
            </div>
          </div>

         
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FcBusinessman size={30} />
            <div>
              <h3 style={{ margin: "0", fontSize: "1.2rem" }}>Check Doctor Profiles</h3>
              <p style={{ margin: "5px 0", fontSize: "0.9rem" }}>
                View detailed profiles of doctors to make informed decisions.
              </p>
            </div>
          </div>

          
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FcCalendar size={30} />
            <div>
              <h3 style={{ margin: "0", fontSize: "1.2rem" }}>Book Appointment</h3>
              <p style={{ margin: "5px 0", fontSize: "0.9rem" }}>
                Schedule an appointment online easily.
              </p>
            </div>
          </div>

        
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FcCheckmark size={30} />
            <div>
              <h3 style={{ margin: "0", fontSize: "1.2rem" }}>Get Your Solution</h3>
              <p style={{ margin: "5px 0",fontSize:"0.9rem" }}>
                Receive the best solution for your health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
