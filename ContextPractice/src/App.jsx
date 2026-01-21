import Home from "./Components/Home";
import ThemeProvider from "./Context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
