import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import InputFields from "../Components/InputField";
import Buttons from "../Components/Button";
import { Signup } from "../Services/Auth/SignupAuth";
const SignupForm = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldSignup, setShouldSignup] = useState(false);
  useEffect(() => {
    if (!shouldSignup) return;
    const handleSignup = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const userData = await Signup({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        });
        console.log(userData);
        setUser(userData);
      } catch (err) {
        setError(err.message || "Signup Failed");
        setUser(null);
      } finally {
        setIsLoading(false);
        setShouldSignup(false);
      }
    };
    handleSignup();
  }, [shouldSignup, email, password]);

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
              <Buttons
                onClick={() => setShouldSignup(true)}
                value={isLoading ? "Signup in..." : "Signup"}
              />
              <Typography textAlign="center" variant="body2">
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#1976d2" }}>
                  Login here
                </Link>
              </Typography>
              {error && <p style={{ color: "red" }}>{error}</p>}
              {user && <h2>Welcome, {user.savedUser.firstname}</h2>}
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SignupForm;
