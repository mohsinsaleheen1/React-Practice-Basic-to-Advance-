import { Button, Container, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/Appbar";
function App() {
  useEffect(() => {
    document.title = "React MUI Home";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {/* 
        AppBAr
        Banner
        Promotions
        title
        Products
        footer
        searchBox
        Appdrawer 
      */}
        <Appbar />
        <Button variant="contained">Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
