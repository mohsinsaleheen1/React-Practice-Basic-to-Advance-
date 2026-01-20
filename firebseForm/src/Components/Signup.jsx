import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import InputFiled from "./InputFiled";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
const auth = getAuth(app);
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const signupForm = () => {
    if (!firstName || !lastName || !email || !password) {
      alert("Please Fill All Field");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((value) => {
          console.log(value);
          navigate("/login");
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
              SIGNUP FORM
            </Typography>
            <Stack spacing={2}>
              <InputFiled
                label={"FirstName"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputFiled
                label={"LastName"}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
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
              <Button variant="contained" onClick={signupForm}>
                Signup
              </Button>
              <Typography textAlign="center" variant="body2">
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#1976d2" }}>
                  Login here
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Signup;
