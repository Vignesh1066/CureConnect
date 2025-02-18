import React from "react";
import doctorImage from "../../assets/WhatsApp Image 2024-12-09 at 15.45.53_f8403ad2.jpg";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaMedkit,
} from "react-icons/fa";
import HeadPart from "../heroSection/HeadPart";

const AboutUs = () => {
  return (
    <div className="">
      {/* About Us Section Header */}
      <section>
      <HeadPart heading={"About Us"}/>
      </section>

      {/* Main Content Section */}
      <section className=" min-h-screen flex flex-col items-center py-12 px-4">
        {/* Main Section */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-sm rounded-lg max-w-6xl w-full gap-6 p-6">
          {/* Left Side: Image */}
          <div className="flex-1">
            <img
              src={doctorImage}
              alt="Doctor Consultation"
              className="rounded-lg  w-full"
            />
          </div>

          <div className="flex-1 space-y-16 ">
            <h2 className="text-3xl font-bold text-gray-800 ">
              We Provide Best Online Doctor Consultation
            </h2>
            <p className="text-gray-600 text-lg">
              "Access top-notch medical consultation from the comfort of your
              home. Connect with highly experienced and certified doctors who
              prioritize your health and well-being. Whether it’s a routine
              check-up, a second opinion, or immediate medical advice, our
              platform ensures that expert care is just a click away. Enjoy
              flexible scheduling, personalized treatment plans, and a seamless
              online experience—all designed to make healthcare accessible,
              affordable, and convenient for you and your family."
            </p>
            <button className="bg-[#0E82FD] text-white py-2 px-6 rounded-lg transition-all duration-300 hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>

        {/* Founder Section */}
        <div className="flex flex-col justify-around w-[85%] md:flex-row items-center py-20 gap-8">
          {/* Image Section */}
          <div className="w-70 h-70 ">
            <img
              src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?t=st=1732714772~exp=1732718372~hmac=786b6bc8d8646789dd2d44f04d6e67c5afda9a3b0b9719ae1a42da77754e0a4d&w=740"
              alt="Founder"
              className="rounded-tl-[55px] rounded-br-[55px] shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="text-gray-700 text-lg max-w-xl px-4  text-justify ">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Founder
            </h3>
            <p className="mb-4 leading-relaxed">
              Dr. John Doe, our founder, is a distinguished medical professional
              with over 15 years of experience in the healthcare industry. A
              graduate from one of the most prestigious medical schools, Dr. Doe
              has worked tirelessly to bridge the gap between advanced
              healthcare and patient accessibility.
            </p>
            <p className="mb-4 leading-relaxed">
              Driven by compassion and innovation, Dr. Doe has spearheaded
              numerous community health initiatives, ensuring that
              underprivileged populations have access to essential medical
              services. Their extensive background in patient care, research,
              and healthcare management has laid the foundation for a service
              that prioritizes both quality and convenience.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-6 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-3xl text-blue-400 hover:text-blue-300 transition-colors duration-300 transform hover:scale-110" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl text-blue-600 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-[80%] py-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "David Kim",
                feedback:
                  "The online consultation was seamless, and the doctor provided excellent advice. Highly recommended!",
                img: "https://randomuser.me/api/portraits/men/1.jpg",
              },
              {
                name: "Sarah Lee",
                feedback:
                  "A great experience! I was able to get a prescription without leaving my house.",
                img: "https://randomuser.me/api/portraits/women/1.jpg",
              },
              {
                name: "Michael Roe",
                feedback:
                  "I had a great experience with my doctor. Very professional and easy to talk to.",
                img: "https://randomuser.me/api/portraits/men/2.jpg",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="shadow-sm rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 hover:scale-105"
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-lg text-gray-600 mb-4">
                  {testimonial.feedback}
                </p>
                <span className="text-gray-800 font-semibold">
                  {testimonial.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-[80%] py-16 rounded-lg shadow-sm p-6 ">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                How do I book an appointment?
              </h4>
              <p className="text-gray-600">
                You can easily book an appointment by selecting the doctor you
                need and choosing a suitable time slot on our platform.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Do I need to download any app?
              </h4>
              <p className="text-gray-600">
                No, our platform is entirely web-based and can be accessed
                through any modern browser, no download required.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Can I get a prescription after my consultation?
              </h4>
              <p className="text-gray-600">
                Yes, after the consultation, you can receive an electronic
                prescription directly through our platform.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Do you offer consultations for emergencies?
              </h4>
              <p className="text-gray-600">
                Our platform is designed for non-emergency consultations. For
                medical emergencies, please visit the nearest hospital or call
                local emergency services.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Is my data secure on your platform?
              </h4>
              <p className="text-gray-600">
                {" "}
                Absolutely! We use advanced encryption and data protection
                measures to keep your personal and medical information secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl  font-bold text-center text-gray-800 mb-16">
          Why Choose Us
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <FaMedkit className="text-5xl text-[#0E82FD] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Expert Doctors
            </h3>
            <p className="text-gray-600">
              Our doctors are highly trained and experienced in their respective
              fields.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaShieldAlt className="text-5xl text-[#0E82FD] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Security
            </h3>
            <p className="text-gray-600">
              We ensure your privacy and security with advanced encryption and
              safety protocols.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaClock className="text-5xl text-[#0E82FD] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              24/7 Availability
            </h3>
            <p className="text-gray-600">
              Our doctors are available round the clock for consultation.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaUsers className="text-5xl text-[#0E82FD] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Thousands Served
            </h3>
            <p className="text-gray-600">
              Over 10,000 satisfied patients have used our services and trust
              our expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
