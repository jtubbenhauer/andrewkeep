import React from "react";
import { MenuItem } from "./Navbar";
import { Flex, IconButton, Link, Slide, Text } from "@chakra-ui/react";
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
        w={"60vw"}
        h={"100vh"}
        right={0}
        zIndex={50}
        gap={12}
        align={"end"}
        style={{ boxShadow: "-7px 0px 113px 7px rgba(0,0,0,0.5)" }}
      >
        <IconButton
          variant={"ghost"}
          aria-label={"Close Mobile Menu"}
          pt={6}
          pr={6}
          icon={<CloseIcon color={"brand.900"} boxSize={6} />}
          onClick={onToggle}
        />
        {items.map((i) => (
          <Link
            key={i.label}
            href={i.href}
            pr={7}
            fontSize={"xl"}
            fontWeight={"bold"}
            color={"brand.900"}
            fontFamily={`'Raleway', sans-serif`}
            _hover={{
              textColor: "blue.800",
            }}
            onClick={onToggle}
          >
            {i.label}
          </Link>
        ))}
      </Flex>
    </Slide>
  );
}

export default MobileMenu;
