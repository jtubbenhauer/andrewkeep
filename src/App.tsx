import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
    </Box>
  );
}

export default App;
