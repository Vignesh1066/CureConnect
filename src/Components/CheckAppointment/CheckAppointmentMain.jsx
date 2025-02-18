import React from "react";
import { Outlet } from "react-router-dom";
import CheckAppointmentNav from "./CheckAppointmetNav";
const CheckAppointmentMain = () => {
  return (
    <main className="relative w-full min-h-screen">
    <div className="w-full px-5 lg:px-10 mt-5">
        <CheckAppointmentNav/>
      </div>

      {/* Outlet for Nested Routes */}
      <Outlet />
    </main>
  );
};

export default CheckAppointmentMain;
