import React from "react";
import logo from "../assets/ak-logo2.png";
import { Box, Flex, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import DesktopMenu from "./DesktopMenu";

export interface MenuItem {
  label: string;
  href: string;
}

const MENU_ITEMS: Array<MenuItem> = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <Box bgColor={"white"}>
      <Flex
        bgColor={"white"}
        p={6}
        align={"center"}
        justify={"space-between"}
        maxW={1400}
        margin={"0 auto"}
      >
        <Image
          src={logo}
          alt={"Andrew Keep Consulting Logo"}
          maxW={{ base: "250px", md: "320px" }}
        />
        <Box display={["none", "none", "block"]}>
          <DesktopMenu items={MENU_ITEMS} />
        </Box>
        <HamburgerIcon
          boxSize={8}
          color={"brand.900"}
          cursor={"pointer"}
          display={{ base: "block", md: "none" }}
        />
      </Flex>
    </Box>
  );
}

export default Navbar;
