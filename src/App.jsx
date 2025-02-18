import { Route, Routes } from "react-router-dom";

import Signin from "./Components/auth/Signin";
import Signup from "./Components/auth/Signup";
import Doctors from "./Components/List of Doctors/DoctorsList";
import DoctorProfile from "./Components/DoctorProfile/DoctorProfile";
import Reviews from "./Components/DoctorProfile/DoctorInfo/Reviews";
import Business from "./Components/DoctorProfile/DoctorInfo/Business";
import About from "./Components/DoctorProfile/DoctorInfo/About";
import ProductDescription from "./Components/medi-prod-details/ProductDescription";
import CartPage from "./Components/medi-prod-details/MediCart";
import ProductCards from "./Components/medi-prod-details/ProductCard";
import InfoMap from "./Components/medi-prod-details/InfoMap";
import MediTC from "./Components/medi-prod-details/MediT&C";
import EditProfilePopup from "./Components/UserProfilePopUp/ProfilePopUp";
import CureConnect from "./Components/Home/CureConnect";
import Home from "./Components/Home/Home";
import MedicineHome from "./Components/Home/MediHome";
// import Steps from "./Components/Home/steps";
// import AboutUs from "./Components/pages/Aboutus";
import FindDoctorHome from "./Components/Home/FindDoctorHome";
import AllCategory from "./Components/Home/AllCategory";
import ErrorPage from "./404-Error";
import ContactUs from "./Components/pages/ContactUs";
import BookAppointment from "./Components/SlotBooking/booking.jsx/AppointmentBokking";
import Confirmation from "./Components/SlotBooking/booking.jsx/Confirmation";
import ResetPassword from "./Components/auth/ForgotPassword";
import ReviewForm from "./Components/DoctorProfile/DoctorInfo/Reviewform";
import OnlineConsultHome from "./Components/Home/OnlineConsultHome";
import OnlineBokkingAppointment from "./Components/SlotBooking/booking.jsx/OnlineAppointment";
import OnlineDoctors from "./Components/OnlineComponent.jsx/OnlineDoctorList";
import OnlineMain from "./Components/OnlineComponent.jsx/OnlineMain";
import CheckAppointmentMain from "./Components/CheckAppointment/CheckAppointmentMain";
import CheckOfflineMain from "./Components/CheckAppointment/CheckOfflineAppointment/CheckOfflineMain";
import CheckOnlineMain from "./Components/CheckAppointment/CheckOnlineAppointment/CheckOnlineMainComp";
import FindDoctorMain from "./Components/Home/Specialities/FindDoctorMail";
import TermsAndConditions from "./Components/Home/TermsAndConditions";
import Steps from "./Components/Home/Step";
import AboutUs from "./Components/pages/AboutPage";

const RouteComp = () => {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/forgotpassword" element={<ResetPassword />} />
      {/* Doctor section */}

      <Route path="/" element={<CureConnect />}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="termsandconditions" element={<TermsAndConditions />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="Profilepopup/:_id" element={<EditProfilePopup />} />

        <Route path="finddoctor" element={<FindDoctorMain />}>
          <Route index element={<FindDoctorHome />} />
          <Route path="doctorbycetegory" element={<Doctors />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctors/:_id" element={<DoctorProfile />}>
            <Route index element={<About />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="addreviews" element={<ReviewForm />} />
            <Route path="businesshours" element={<Business />} />
          </Route>
          <Route
            path="book-appointment/:doctorId"
            element={<BookAppointment />}
          />
          <Route path="confirmation/:_id" element={<Confirmation />} />
        </Route>

        {/* <Route path="doctorProfile/avaliableslot" element={<Mainslot />} />
        <Route path="doctorProfile/avaliableslot/checkout"  element={<BookingForm />} /> */}

        {/* MEDICINE */}

        <Route path="medicines" element={<MedicineHome />}></Route>
        <Route path="medicines/allcategory" element={<AllCategory />} />

        {/* onlineconsult */}

        <Route path="onlineconsult" element={<OnlineMain />}>
          <Route index element={<OnlineConsultHome />} />
          <Route path="doctorbycetegory" element={<OnlineDoctors />} />
          <Route path="/onlineconsult/doctors/:_id" element={<DoctorProfile />}>
            <Route index element={<About />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="addreviews" element={<ReviewForm />} />
            <Route path="businesshours" element={<Business />} />
          </Route>
          <Route
            path="book-appointment/:doctorId"
            element={<OnlineBokkingAppointment />}
          />
        </Route>

        {/* checkappointment */}

        <Route
          path="/checkappointment/:userId"
          element={<CheckAppointmentMain />}
        >
          <Route index element={<CheckOfflineMain />} />
          <Route path="onlineappointments" element={<CheckOnlineMain />} />
        </Route>
      </Route>

      {/* Medicine section */}
      <Route path="/mediproduct" element={<ProductCards />} />
      <Route path="/medidetials" element={<ProductDescription />} />
      <Route path="/medicart" element={<CartPage />} />
      <Route path="/info" element={<InfoMap />} />
      <Route path="/termsandconditions" element={<MediTC />} />
      <Route path="/services" element={<Steps />} />
    </Routes>
  );
};

export default RouteComp;
