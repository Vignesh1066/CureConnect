import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode"; // To decode the Google credential response
import Doctor from "../../assets/young-doctors-with-papers-hallway.jpg";
import Logo from "../../assets/CC_logo3.png";
import { Grid, TextField, Button, Typography } from "@mui/material"; // MUI components

const urlApi = "http://localhost:7000/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle Normal Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${urlApi}/login`, { email, password });
      toast.success(response.data.message);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.findEmail._id);
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed.");
    }
  };

  // Handle Google Login Success
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential); // Decode Google response
      const payload = {
        email: decoded.email,
        username: decoded.name,
        googleId: decoded.sub,
        picture: decoded.picture,
      };

      const response = await axios.post(`${urlApi}/googleAuth`, payload);
      toast.success(response.data.message);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.findEmail._id);
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Google Sign-In Failed.");
    }
  };

  return (
    <div className="w-full flex flex-row max-[780px]:justify-center bg-gray-100">
      <img
        src={Doctor}
        alt="docotro"
        className="h-screen w-[50%] max-[780px]:hidden"
      />

      <div className="w-[50%] max-[780px]:w-full max-[440px]:p-7 flex justify-center">
        <GoogleOAuthProvider clientId="124694299923-jvh9t1q6abeh6f2ft1r78l43c7dih7aa.apps.googleusercontent.com">
          <div className="min-h-screen flex flex-col items-center justify-center">
            <Typography variant="h4" component="h2" align="center" color="primary" mb={3}>
              -- Welcome to CureConnect --
            </Typography>

            <div className="w-full max-w-md p-6 rounded-xl shadow-sm shadow-slate-600 bg-white flex flex-col items-center justify-center">
              <img
                src={Logo}
                alt="product icon"
                className="w-36 h-12 text-center mb-8"
              />
              {error && <Typography color="error">{error}</Typography>}

              {/* Normal Login Form with MUI */}
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      variant="outlined"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
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
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>

              <Typography variant="body1" align="center" mt={2} mb={2}>
                OR
              </Typography>

              {/* Google Login */}
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => toast.error("Google Sign-In Failed.")}
                useOneTap
                shape="pill"
                text="signin_with"
              />

              <Typography variant="body2" align="center" mt={2}>
                <Link to="/forgotpassword" style={{ color: "#1E3A8A" }}>
                  Forgot Password
                </Link>
              </Typography>
              <Typography variant="body2" align="center" mt={2}>
                Don’t have an account?{" "}
                <Link to="/register" style={{ color: "#1E3A8A" }}>
                  Register
                </Link>
              </Typography>
            </div>
          </div>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Login;
