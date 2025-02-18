import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // Decode the Google credential response
import { toast } from "react-toastify";
import Doctor from "../../assets/young-doctors-with-papers-hallway.jpg";
import Logo from "../../assets/CC_logo3.png";
import { Grid, TextField, Button, Typography, FormControlLabel, Checkbox } from "@mui/material"; // MUI components

const urlApi = "http://localhost:7000/user";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle registration form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(`${urlApi}/register`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      toast.success(response.data.message);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  // Handle Google Sign-Up
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const payload = {
        googleId: decoded.sub,
        username: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      };

      const response = await axios
        .post(`${urlApi}/googleAuth`, payload)
        .then((res) => {
          toast.success(res.data.message);
          navigate("/login");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } catch (err) {
      console.log(err);
      toast.error("Google Sign-Up Failed.");
    }
  };

  return (
    <div className="w-full flex flex-row max-[780px]:justify-center bg-gray-100">
      <img
        src={Doctor}
        alt="doctor"
        className="h-screen w-[50%] max-[780px]:hidden"
      />

      <div className="w-[50%] max-[780px]:w-full max-[440px]:p-7 flex justify-center">
        <GoogleOAuthProvider clientId="124694299923-jvh9t1q6abeh6f2ft1r78l43c7dih7aa.apps.googleusercontent.com">
          <div className="min-h-screen flex flex-col items-center justify-center">
            <Typography variant="h4" align="center" color="primary" gutterBottom>
              -- Welcome to CureConnect --
            </Typography>

            <div className="w-full max-w-md p-6 rounded-xl shadow-sm shadow-slate-600 bg-white flex flex-col items-center justify-center">
              <img
                src={Logo}
                alt="product icon"
                className="w-36 h-12 text-center mb-8"
              />

              {error && <Typography color="error">{error}</Typography>}

              {/* Registration Form with MUI */}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Username"
                      name="username"
                      variant="outlined"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      type="password"
                      variant="outlined"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      variant="outlined"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.terms}
                          onChange={handleChange}
                          name="terms"
                        />
                      }
                      label="I agree to the terms and conditions"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{ padding: "12px" }}
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </form>

              <Typography variant="body1" align="center" my={2}>
                OR
              </Typography>

              {/* Google Login */}
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => toast.error("Google Sign-Up Failed.")}
                useOneTap
                shape="pill"
                text="signup_with"
              />

              <Typography variant="body2" align="center" mt={2}>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#1E3A8A" }}>
                  Login
                </Link>
              </Typography>
            </div>
          </div>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Register;
