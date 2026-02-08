import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/Appbar";
import Banner from "./components/Banner";
import Promotions from "./components/promotions";
import Products from "./components/Products";
function App() {
  useEffect(() => {
    document.title = "React MUI Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* 
        footer
        searchBox
        Appdrawer 
      */}
        <Appbar />
        <Banner />
        <Promotions />
        <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
          <Typography variant="h4">Our Product</Typography>
        </Box>
        <Products />
      </Container>
    </ThemeProvider>
  );
}

export default App;
