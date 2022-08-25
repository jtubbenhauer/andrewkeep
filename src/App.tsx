import "./App.css";
import { Box, useDisclosure } from "@chakra-ui/react";
import Navbar, { MenuItem } from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import React from "react";

const MENU_ITEMS: Array<MenuItem> = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function App() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      {isOpen && (
        <MobileMenu items={MENU_ITEMS} onToggle={onToggle} isOpen={isOpen} />
      )}
      <Navbar onToggle={onToggle} menuItems={MENU_ITEMS} />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
