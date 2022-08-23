import React from "react";
import logo from "../assets/ak-logo2.png";
import { Flex, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export interface MenuItem {
  label: string;
  href: string;
}

const MENU_ITEMS: MenuItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

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
