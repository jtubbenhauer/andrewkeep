import React from "react";
import { MenuItem } from "./Navbar";
import { Flex, IconButton, Slide, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface Props {
  items: Array<MenuItem>;
  onToggle: () => void;
  isOpen: boolean;
}

function MobileMenu({ items, onToggle, isOpen }: Props) {
  return (
    <Slide in={isOpen} style={{ zIndex: "50" }}>
      <Flex
        position={"absolute"}
        flexDirection={"column"}
        bgColor={"white"}
        w={"80vw"}
        h={"100vh"}
        right={0}
        zIndex={50}
        style={{ boxShadow: "-7px 0px 113px 7px rgba(0,0,0,0.75)" }}
      >
        <IconButton
          variant={"ghost"}
          aria-label={"Close Mobile Menu"}
          icon={<CloseIcon />}
          onClick={onToggle}
        />
        {items.map((i) => (
          <Text mb={20} textAlign={"right"}>
            {i.label}
          </Text>
        ))}
      </Flex>
    </Slide>
  );
}

export default MobileMenu;
