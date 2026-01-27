import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import InputFields from "../Components/InputField";
import Buttons from "../Components/Button";
import { Link, useNavigate } from "react-router";
import { userContextData } from "../Contexts/AuthContext";
import { loginUsers } from "../Services/Auth/LoginAuth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login } = userContextData();
  const handleLogin = async () => {
    try {
      console.log(email, password);
      const result = await loginUsers({ email, password });
      console.log(result);
      login(result.user);
      navigate("/profile");
    } catch (err) {
      console.log(err);
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
        <Container maxWidth="xs">
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
                onClick={handleLogin}
                value="Login"
                sx={{ marginTop: "20px", maxWidth: "100%" }}
              />
              <Typography textAlign="center" variant="body2">
                Don't have account?{" "}
                <Link to="signup" style={{ color: "#1976d2" }}>
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
