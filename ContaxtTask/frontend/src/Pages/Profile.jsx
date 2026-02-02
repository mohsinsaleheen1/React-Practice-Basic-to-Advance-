import { Box, Button, Container, Typography } from "@mui/material";
// import { userContextData } from "../Contexts/AuthContext";
// import { useNavigate } from "react-router";
// import Buttons from "../Components/Button";
const Profile = () => {
  // const navigate = useNavigate();
  // const BASE_URL = "http://localhost:5000/uploads/";
  // const { user, logout, loading } = userContextData();
  // if (loading || !user) {
  //   return <h1>Loading Profile...</h1>;
  // }
  // const LogoutUser = () => {
  //   logout();
  //   navigate("/signup");
  // };
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography variant="h4" mt={5} fontSize={32}>
            Implementation of Full-Stack User Authentication and File Management
          </Typography>
          <Typography variant="p" mt={1} fontSize={18}>
            The project began with the challenge of implementing a robust user
            registration system that supports binary file uploads, specifically
            user avatars. To achieve this, we transitioned the frontend from a
            standard JSON-based request to a Multipart Form-Data approach. By
            utilizing the FormData API in React, we were able to bundle text
            fields like the user’s name, email, and password along with the raw
            image file. This ensured that the browser set the correct enctype
            header, allowing the backend to process the complex data stream
            using Multer, a Node.js middleware designed for handling file
            uploads. <br />
            On the backend, we configured a storage engine to rename and save
            these images into a dedicated uploads directory. A critical step in
            the process was ensuring that these files were accessible to the
            public web. By implementing the express.static middleware in the
            main server file, we mapped a virtual URL path (/uploads) to the
            physical folder on the server. This allowed the frontend to fetch
            the profile pictures using a direct URL. We encountered a common
            routing challenge where the server was looking for files in a nested
            src/uploads directory; we resolved this by aligning the physical
            folder structure with the static route configuration, thereby fixing
            the "Cannot GET" errors during image retrieval.
            <br />
            For state management, we implemented a React Context API
            (UserProvider) to maintain a global authentication state. This
            ensures that the user's data remains persistent even after a page
            refresh. The context triggers an initial authentication check by
            calling a /home endpoint on the backend, which verifies the user's
            session via cookies. If authenticated, the user object—including the
            filename of the avatar—is stored in the global state. This data is
            then consumed by a Responsive Navigation Bar built with Material UI.{" "}
            <br />
            The navigation bar dynamically adapts its UI based on the user's
            presence. We implemented logic where the "Settings" menu
            conditionally renders either "Profile" and "Logout" for
            authenticated users, or "Login" and "Register" for guests. The
            Avatar component was programmed to concatenate the backend's base
            URL with the filename stored in the database, successfully rendering
            the user's uploaded image. Finally, we refined the logout logic to
            clear the global state and redirect the user, ensuring a secure and
            seamless user experience across the entire application.
          </Typography>
        </Box>
      </Container>
    </>
  );
};
export default Profile;
