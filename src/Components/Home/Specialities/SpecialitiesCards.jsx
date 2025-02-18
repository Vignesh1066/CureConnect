import react from "react"
import { useNavigate } from "react-router-dom";

function SpecialitiesCard({ icon, title, bgImage }) {

  const navigate = useNavigate()

  const handleCategoryClick = () =>{
    navigate(`/finddoctor/doctorbycetegory?category=${title}`)
  }

  return (
    <div
      className="group relative flex flex-col items-center justify-center p-4 rounded-md shadow-md transition-all duration-300 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        height: "300px",
        borderRadius: "6px",
      }}
      onClick={() => handleCategoryClick(title)}
    >
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-md"></div>
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-md"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Adjust the size of the icon box here */}
          <div
            className="bg-white shadow-md group-hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "10%",
            }}
          >
            <div className="text-4xl text-blue-500 group-hover:text-white transition-all duration-300">
              {icon}
            </div>
          </div>
          <p className="mt-2 text-lg font-medium text-white group-hover:text-white transition-all">
            {title}
          </p>
        </div>
    </div>
  );
}

export default SpecialitiesCard;
