import { Box, Button, Container, Typography } from "@mui/material";
import { userContextData } from "../Contexts/AuthContext";
import { useNavigate } from "react-router";
import Buttons from "../Components/Button";
const Profile = () => {
  const navigate = useNavigate();
  const { user, logout, loading } = userContextData();
  console.log(user);
  if (loading || !user) {
    return <h1>Loading Profile...</h1>;
  }
  const LogoutUser = () => {
    logout();
    navigate("/signup");
  };
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap:"10px"
          }}
        >
          <Typography variant="h4" mt={5}>
            Welcome {user.firstname}
          </Typography>
          <Buttons onClick={LogoutUser} value="Logout" />
        </Box>
      </Container>
    </>
  );
};
export default Profile;
