import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Book Appointment",
      subtitle: "Book Now",
      image: "https://img.freepik.com/free-photo/gynecologist-evaluating-pregnancy-with-patient_23-2149353055.jpg?t=st=1732608720~exp=1732612320~hmac=b99f6a1d7956a78ba16cad83aa90db76a4b7e6f6a642f38150b353a65ef9b733&w=740",
      path: "/finddoctor"
    },
    {
      id: 2,
      title: "Online Appointment",
      subtitle: "Book Now",
      image: "https://img.freepik.com/premium-photo/doctor-showing-health-control-app_274689-40946.jpg?w=740",
      path:"/onlineconsult"
    },
    {
      id: 3,
      title: "Online Medical Shop",
      subtitle: "Buy Medicine",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/3/XN/PD/MN/4656281/online-pharmacy-500x500.jpg",
      path:"/medicines"
    },
  ];

  return (
    <div className="w-full flex flex-col mt-16 mb-7">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full ">
        {services.map((service) => (
          <Link to={service.path}>
            <div
            key={service.id}
            className="relative group w-full h-64 sm:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white transition-opacity duration-300 group-hover:bg-opacity-70">
              <h3 className="text-lg lg:text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm lg:text-base">{service.subtitle}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
