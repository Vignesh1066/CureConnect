import React, { useState, useEffect } from "react";
import { IoStar, IoStarHalf } from "react-icons/io5";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../../ReusableComp/Loader";

const ReviewSection = () => {
  const { _id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/user/reviews?docId=${_id}`
        );
        setReviews(response.data); 
        setLoading(false);
      } catch (err) {
        setError(" Reviews are not found for this Doctor ...!");
        setLoading(false);
      }
    };

    fetchReviews();
  }, [_id]); 

  if (loading) {
    return <div className=" w-full text-center flex justify-center items-center  " >
      <Loader/>
    </div>;
  }

  if (error) {
    return <p className=" w-full text-center flex justify-center items-center h-[400px] font-semibold ">{error}</p>;
  }

  return (
    <div className="min-h-screen">
   
      <div className="max-w-7xl max-md:w-full mx-auto rounded-lg max-md:p-1 p-5">
        <div>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review._id}
                className="flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4 border pb-4 mb-4 bg-white border-gray-300 p-5 rounded-lg"
              >
                <img
                  src={`http://localhost:7000/upload/${review.userPic ? review.userPic.split("\\").pop() : ""}`}
                  alt={review.userId.username}
                  className="w-16 h-16 sm:w-12 sm:h-12 rounded-full mx-auto sm:mx-0"
                />

                {/* Review Content */}
                <div className="mt-4 sm:mt-0">
                  <div className="flex justify-between items-center max-md:flex-col">
                    <h3 className="font-semibold text-lg">
                      {review.userName}
                    </h3>
                    <span className="text-sm max-sm:text-xs text-gray-500">
                     Reviewed on  {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {review.title && (
                    <p className="text-green-600 font-medium ">
                      👍 {review.title}
                    </p>
                  )}
                  <p className="text-gray-600 mt-2">{review.review}</p>

                  <div className="flex items-center mt-2  text-yellow-500">
                    {[...Array(5)].map((_, index) => {
                      if (index < review.rating) {
                        return <IoStar key={index} />;
                      }
                      return <IoStarHalf key={index} />;
                    })}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className=" w-full text-center flex justify-center items-center h-[400px] font-semibold ">No reviews yet.</p>
          )}
        </div>

        {/* Show All Reviews Button */}
        {/* <div className="flex justify-center mt-4">
          <button className="text-blue-700 text-sm items-center px-4 py-2 bg-blue-300 hover:bg-blue-700 hover:text-white rounded-md transition duration-300">
            Show all Reviews ({reviews.length})
          </button>
        </div> */}
      </div>

   
    </div>
  );
};

export default ReviewSection;
