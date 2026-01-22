import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import InputFields from "../Components/InputField";
import Buttons from "../Components/Button";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../Contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setUser } = useContext(UserContext);
  const loginForm = async () => {
    if (!email || !password) {
      alert("Please Fill All Fields");
      return;
    }
    if (!email.includes("@")) {
      alert("Please Enter Correct Email");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        localStorage.setItem("userToken", data.token);
        alert("Login Successful!");
        navigate("/home");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f5f5f5",
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              p: 4,
              boxShadow: 3,
              borderRadius: 2,
              bgcolor: "white",
            }}
          >
            <Typography variant="h5" textAlign="center" color="primary" mb={2}>
              LOGIN FORM
            </Typography>
            <Stack spacing={2}>
              <InputFields
                label={"Email"}
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputFields
                label={"Password"}
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Buttons
                onClick={loginForm}
                value="Login"
                sx={{ marginTop: "20px", maxWidth: "100%" }}
              />
              <Typography textAlign="center" variant="body2">
                Don't have account?{" "}
                <Link to="/" style={{ color: "#1976d2" }}>
                  Signup Here
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
