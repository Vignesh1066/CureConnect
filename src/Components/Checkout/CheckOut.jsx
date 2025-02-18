import React, { useState } from "react";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BookingForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [patient, setPatient] = useState(["Sri ganesh"]);

  const [AddPatient, setAddPatient] = useState(false);
  const [newpatientName, setNewpatientName] = useState();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [Address, setAddress] = useState([
    " no19, sakthinagar 18th street,nerkundram, Chennai, TAMIL NADU(600107)",
  ]);
  const [NewAddress, setNewAddress] = useState();
  const [EditAdress, setEditAddress] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const HandleUpdatePatient = () => {
    if (newpatientName.trim() !== "") {
      setPatient([newpatientName]);
      setNewpatientName("");
      setAddPatient("");
    }
  };

  const HandleUpdateAddress = () => {
    if (EditAdress.trim() !== "") {
      setAddress([NewAddress]);
      setNewAddress("");
      setEditAddress("");
    }
  };

  return (
    <div className="main w-full h-screen overflow-auto">
      <div className="relative h-[100px] z-10 w-full p-6 lg:p-10 text-center">
        <h1 className="text-2xl lg:text-3xl font-normal text-gray-800">
          Checkout
        </h1>
      </div>

      <div className="mx-auto max-h-[900px] p-6 flex flex-col lg:flex-row gap-6">
        <div className="Form w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 shadow-gray-400">
          <div className="mb-6">
            <h2 className="Information text-2xl font-bold text-gray-800 mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="max-w-[300px] px-4 py-3 text-sm border-b border-gray-400 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] focus:rounded-lg focus:border-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="max-w-[300px] px-4 py-3 text-sm border-b border-gray-400 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] focus:rounded-lg focus:border-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="max-w-[300px] px-4 py-3 text-sm border-b border-gray-400 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] focus:rounded-lg focus:border-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="max-w-[300px] px-4 py-3 text-sm border-b border-gray-400 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] focus:rounded-lg focus:border-none"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Existing Customer?{" "}
              <Link to={"/signin"} className="text-blue-600 underline">
                Click here to login
              </Link>
            </p>
          </div>

          <div className="Payment Method mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Payment Method
            </h2>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="online"
                  onChange={() => setPaymentMethod("credit_card")}
                  className="w-4 h-4"
                />
                Online Payment
              </label>
              {paymentMethod === "credit_card" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <Link to={"/Rayzor pay"}>
                    <h2 className="w-full border rounded-md px-4 py-2">
                      Rayzor Pay
                    </h2>
                  </Link>
                </div>
              )}
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  onChange={() => setPaymentMethod("pay_later")}
                  className="w-4 h-4"
                />
                Pay Later at Clinic
              </label>
            </div>
          </div>

          <div className="Terms and Confirm flex items-center gap-2 mb-4">
            <input type="checkbox" id="terms" className="w-4 h-4" />
            <label htmlFor="terms" className="text-xs text-gray-700">
              I have read and accept
              <Link
                className="text-blue-600 underline"
                to={"/termsandconditions"}
              >
                Terms & Conditions
              </Link>
            </label>
          </div>

          <button
            onClick={togglePopup}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Confirm and Pay
          </button>

          {isPopupOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={togglePopup}
            ></div>
          )}
        </div>
        <div
          className={`fixed top-0 right-0 h-screen w-full lg:w-1/4 bg-white shadow-xl z-50 transform ${
            isPopupOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Profile Details</h2>
              <button
                onClick={togglePopup}
                className="text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>

            {/* Select Patient Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">Select Patient</label>
                <button
                  onClick={() => setAddPatient("add_patient")}
                  className="text-blue-600 text-sm font-semibold"
                >
                  + Edit Patient Name
                </button>
              </div>
              <div className="space-y-2">
                <label className="flex items-center   gap-4 py-5">
                  <input
                    type="radio"
                    name="patient"
                    className="w-4 h-4 text-blue-500"
                  />
                  {patient}
                </label>

                {AddPatient === "add_patient" && (
                  <div className="grid grid-cols-1 gap-4 mt-2 ">
                    <input
                      type="text"
                      value={newpatientName}
                      placeholder="Enter Patient Name"
                      onChange={(e) => setNewpatientName(e.target.value)}
                      className="max-w-full px-4 py-3 text-sm border-b border-gray-400 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] focus:rounded-lg focus:border-none"
                    />
                    <button
                      onClick={HandleUpdatePatient}
                      className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    >
                      change
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Select Address Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2 py-4">
                <label className="text-sm font-medium">Select Address</label>
                <button
                  onClick={() => setEditAddress("edit_address")}
                  className="text-blue-600 text-sm font-semibold"
                >
                  + Edit Delivery Address
                </button>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-5 py-5">
                  <input
                    type="radio"
                    name="address"
                    className="w-4 h-4 py-3 text-blue-500"
                  />

                  <div className=" text-base">{Address}</div>
                </label>

                {EditAdress === "edit_address" && (
                  <div className="grid grid-cols-1 gap-4 py-2 ">
                    <input
                      type="text"
                      value={NewAddress}
                      placeholder="Enter A New Address"
                      onChange={(e) => setNewAddress(e.target.value)}
                      className="max-w-full px-4 py-3 text-sm border-b border-gray-400 focus:outline-none focus:ring-2 focus:ring-gradient-to-r from-[#002578] to-[#0E82FD] focus:rounded-lg focus:border-none"
                    />

                    <button
                      onClick={HandleUpdateAddress}
                      className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    >
                      Update Changes
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={togglePopup}
                className="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button className="py-2 px-4 bg-blue-500 text-white rounded-lg">
                Save & Continue
              </button>
            </div>
          </div>
        </div>

        <div className="Booking Summary sticky top-6 w-full max-h-[400px] lg:w-1/3 bg-white p-6 rounded-lg border-2 border-gray-300 shadow-md shadow-gray-400">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Booking Summary
          </h2>
          <div className="flex items-center mb-4">
            <img
              src="https://doccure.dreamstechnologies.com/react/template/56a326a6aa580d332697.jpg"
              alt="Doctor"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Dr. Darren Elder
              </h3>
              <div className="con flex space-x-1">
                <IoLocationOutline />
                <p className="text-sm text-gray-600"> New York, USA</p>
              </div>
            </div>
          </div>
          <div className="date w-full flex justify-evenly items-center p-3">
            <p className="text-sm text-gray-600  ">
              Date: <b>16 Nov 2019</b>
            </p>
            <p className="text-sm text-gray-600 w-[50%] flex justify-end items-center">
              Time: <IoMdTime /> <b>10:00 AM</b>
            </p>
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-gray-800">
              <span>Consulting Fee</span>
              <span>Rs:100</span>
            </div>
            <div className="flex justify-between text-gray-800">
              <span>Booking Fee</span>
              <span>Rs:10</span>
            </div>
            <div className="flex justify-between text-gray-800">
              <span>Video Call</span>
              <span>Rs:50</span>
            </div>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-800">
            <span>Total</span>
            <span className="text-green-500">Rs:160</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
