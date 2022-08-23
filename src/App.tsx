import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
