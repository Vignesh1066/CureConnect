import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const initialState = {
  username: "",
  email: "",
  mobile: "",
  address: "",
  gender: "",
  bloodGroup: "",
  image: null,
};

const EditProfilePage = () => {
  const [formData, setFormData] = useState(initialState);
  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch profile data when the component mounts
  const getProfileData = async () => {
    const authToken = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    try {
      await axios
        .get(`http://localhost:7000/user/getUserProfile?_id=${userId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((res) => {
          setFormData(res.data);
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } catch (error) {
      toast.error("Error fetching profile data");
    }
  };

  useEffect(() => {
    window.scrollTo(0,0)
    getProfileData();
  }, []);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
      ...(type === "file" && { fileOriginalName: files[0]?.name || "" }),
    }));
  };

  // Enable edit mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  const { _id } = useParams();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    const authToken1 = localStorage.getItem("token");
    try {
      await axios
        .put(`http://localhost:7000/user/getUserProfile/?objId=${_id}`, data, {
          headers: {
            Authorization: `Bearer ${authToken1}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          toast.success(res.data.message);
          setFormData(initialState);
          setIsEditing(false);
          navigate("/");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-10 px-5">
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Edit Profile
      </Typography>

      <div className="flex justify-center">
        <div className="w-full max-w-xl bg-white p-6  max-md:p-2 shadow-lg border-2 border-gray-300 rounded-md">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src={
                  formData.profileFileName
                    ? `http://localhost:7000/upload/${formData.profileFileName}`
                    : `${formData.picture}`
                }
                alt="Profile"
                className="w-32 h-32 rounded-full border"
              />
              {isEditing && (
                <label className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full cursor-pointer">
                  <MdEdit className="text-blue-500" />
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Personal Information Form */}
          <div className="mb-5">
            <div className="py-5">
            <Typography
              variant="h6"
              color="primary"
              gutterBottom
              align="center"
            >
              Personal Information
            </Typography>
            </div>
            

            {isEditing ? (
              <form onSubmit={handleOnSubmit} className="space-y-5">
                <TextField
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
                <TextField
                  label="Mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
                <TextField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  size="small"
                  multiline
                  rows={4}
                />
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel>Gender</InputLabel>
                  <Select
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel>Blood Group</InputLabel>
                  <Select
                    label="Blood Group"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                  >
                    <MenuItem value="A+">A+</MenuItem>
                    <MenuItem value="A-">A-</MenuItem>
                    <MenuItem value="B+">B+</MenuItem>
                    <MenuItem value="B-">B-</MenuItem>
                    <MenuItem value="O+">O+</MenuItem>
                    <MenuItem value="O-">O-</MenuItem>
                    <MenuItem value="AB+">AB+</MenuItem>
                    <MenuItem value="AB-">AB-</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                >
                  Save Changes
                </Button>
              </form>
            ) : (
              <div className="space-y-5">
                <div className="flex justify-between">
                  <span className="font-semibold">Username:</span>
                  <span>{formData.username || "Not provided"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Mobile:</span>
                  <span>{formData.mobile || "Not provided"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Email:</span>
                  <span>{formData.email || "Not provided"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Address:</span>
                  <span>{formData.address || "Not provided"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Gender:</span>
                  <span>{formData.gender || "Not provided"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Blood Group:</span>
                  <span>{formData.bloodGroup || "Not provided"}</span>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleEdit}
                  fullWidth
                >
                  Edit Profile
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
