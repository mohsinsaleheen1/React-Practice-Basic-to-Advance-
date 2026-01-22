import { Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../Contexts/AuthContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Container>
        <Typography variant="h4" mt={5}>
          Welcome, {user ? `${user.firstname} ${user.lastname}` : "Guest"}!
        </Typography>
        {user && (
          <Typography variant="body1">Your Email: {user.email}</Typography>
        )}
      </Container>
    </>
  );
};

export default Home;
