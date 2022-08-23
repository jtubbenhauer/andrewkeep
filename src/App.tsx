import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </Box>
  );
}

export default App;
