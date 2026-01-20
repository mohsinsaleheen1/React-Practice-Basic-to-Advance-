import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import InputFiled from "./InputFiled";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginForm = () => {
    if (!email || !password) {
      alert("Please fill all fields");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((value) => {
          const user = value.user;
          console.log(user);
          navigate("/home");
        })
        .catch((err) => {
          alert(err);
          console.log(err);
        });
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
              <InputFiled
                label={"Email"}
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputFiled
                label={"Password"}
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{ marginTop: "20px" }}
                onClick={loginForm}
              >
                Login
              </Button>
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
