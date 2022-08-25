import React from "react";
import logo from "../assets/ak-logo2.png";
import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import DesktopMenu from "./DesktopMenu";

export interface MenuItem {
  label: string;
  href: string;
}

interface Props {
  onToggle: () => void;
  menuItems: Array<MenuItem>;
}

function Navbar({ onToggle, menuItems }: Props) {
  return (
    <Box bgColor={"white"} position={"relative"}>
      <Flex
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
          <DesktopMenu items={menuItems} />
        </Box>
        <IconButton
          display={{ base: "block", md: "none" }}
          variant={"ghost"}
          onClick={onToggle}
          aria-label={"Open Mobile Menu Icon"}
          icon={
            <HamburgerIcon boxSize={8} color={"brand.900"} cursor={"pointer"} />
          }
        />
      </Flex>
    </Box>
  );
}

export default Navbar;
