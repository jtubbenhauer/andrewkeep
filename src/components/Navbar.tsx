import React from "react";
import logo from "../assets/ak-logo2.png";
import { Flex, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const MENU_ITEMS = {};

function Navbar() {
  return (
    <Flex bgColor={"white"} p={6} align={"center"} justify={"space-between"}>
      <Image
        src={logo}
        alt={"Andrew Keep Consulting Logo"}
        maxW={{ base: "250px", md: "320px" }}
      />
      <HamburgerIcon
        boxSize={8}
        color={"brand.900"}
        cursor={"pointer"}
        display={{ base: "block", md: "none" }}
      />
    </Flex>
  );
}

export default Navbar;
