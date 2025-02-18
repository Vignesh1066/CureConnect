import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import axios from "axios";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    const authToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
       "http://localhost:7000/user/contact",
        formData,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (response.status === 200) {
        console.log("Form data successfully submitted");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          role: "",
          message: "",
        });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="relative w-full">
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col text-left md:left-8 lg:left-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-2">
            Contact Us
          </h2>
         
        </div>

        <img
          src="https://static.vecteezy.com/system/resources/previews/036/222/149/large_2x/ai-generated-team-of-doctor-in-a-hospital-background-hospital-medical-team-banner-with-group-of-smiling-healthy-doctors-and-nurses-ai-generated-free-photo.jpg"
          alt="Doctors Group"
          className="rounded-md w-full h-[300px] sm:h-[400px] md:h-[350px] object-cover"
        />
      </div>

      <div className="flex justify-center items-center w-full px-6 py-6 mt-8 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-500 text-4xl mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="font-bold text-xl mb-2">Office Address</h3>
            <p className="text-gray-600 text-sm text-center">
              123 Medical Street, Health City
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-500 text-4xl mb-4">
              <FaPhoneAlt />
            </div>
            <h3 className="font-bold text-xl mb-2">Phone Number</h3>
            <p className="text-gray-600 text-sm text-center">
              +1 (234) 567-8901
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <div className="text-yellow-500 text-4xl mb-4">
              <FaEnvelope />
            </div>
            <h3 className="font-bold text-xl mb-2">Email Address</h3>
            <p className="text-gray-600 text-sm text-center">
              contact@doctor.com
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <div className="text-green-500 text-4xl mb-4">
              <FaGlobe />
            </div>
            <h3 className="font-bold text-xl mb-2">Website Address</h3>
            <p className="text-gray-600 text-sm text-center">
              www.doctorconsulting.com
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between p-8 max-md:p-2 w-11/12">
        <div className="w-full lg:w-1/2 flex justify-center mb-6 px-3 lg:mb-0">
          <img
            src="https://doctoratdoor.co.in/assets/benefits-image.png"
            alt="Contact Us Form"
            className="rounded-md max-w-full h-auto"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName" // Name attribute to match state key
                  value={formData.fullName}
                  onChange={handleChange} // Handles change for all fields
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  name="email" // Name attribute to match state key
                  value={formData.email}
                  onChange={handleChange} // Handles change for all fields
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  name="phone" // Name attribute to match state key
                  value={formData.phone}
                  onChange={handleChange} // Handles change for all fields
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required variant="outlined">
                  <InputLabel id="role-label">Select Your Concern</InputLabel>
                  <Select
                    labelId="role-label"
                    name="role" // Name attribute to match state key
                    value={formData.role}
                    onChange={handleChange} // Handles change for all fields
                    label="Select Your Concern"
                    variant="outlined"
                  >
                    <MenuItem value="user">User Query</MenuItem>
                    <MenuItem value="admin">Job</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message" // Name attribute to match state key
                  value={formData.message}
                  onChange={handleChange} // Handles change for all fields
                  required
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-4"
              sx={{
                backgroundColor: "blue",
                "&:hover": { backgroundColor: "blue" },
              }}
            >
              Submit Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
