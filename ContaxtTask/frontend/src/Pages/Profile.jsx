import { Container, Typography } from "@mui/material";
import { userContextData } from "../Contexts/AuthContext";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = userContextData();
  console.log(user);
  const LogoutUser = () => {
    logout();
    navigate('/signup');
  };
  return (
    <>
      <Container>
        <Typography variant="h4" mt={5}>
          {/* Welcome {user.firstname} */}
          <button onClick={LogoutUser}>Logout</button>
        </Typography>
      </Container>
    </>
  );
};

export default Profile;
