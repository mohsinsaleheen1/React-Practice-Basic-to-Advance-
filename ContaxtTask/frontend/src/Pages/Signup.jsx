import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import InputFields from "../Components/InputField";
import Buttons from "../Components/Button";
import { UserContext } from "../Contexts/AuthContext";
const Signup = () => {
  const { setUser } = useContext(UserContext);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupForm = async () => {
    if (!firstname || !lastname || !email || !password) {
      alert("Please Fill All Fields");
      return;
    }
    if (!email.includes("@")) {
      alert("Please Enter Correct Email");
      return;
    }
    const userData = { firstname, lastname, email, password };
    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setUser(data.user);
        alert("Account Created!");
        navigate("/login");
      } else {
        alert("Signup Failed");
      }
    } catch (error) {
      console.log(error);
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
              <InputFields
                label={"FirstName"}
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputFields
                label={"LastName"}
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
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
              <Buttons onClick={signupForm} value="Signup" />
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
