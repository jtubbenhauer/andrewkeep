import React from "react";
import logo from "../assets/ak-logo.png";
import { Box, Flex, Image } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex bgColor={"white"} p={8}>
      <Image src={logo} alt={"Andrew Keep Consulting Logo"} width={350} />
    </Flex>
  );
}

export default Navbar;
