import React from "react";
import { MenuItem } from "./Navbar";
import { Flex, Link } from "@chakra-ui/react";

interface Props {
  items: Array<MenuItem>;
}

function DesktopMenu({ items }: Props) {
  return (
    <Flex gap={10}>
      {items.map((i) => (
        <Link
          key={i.label}
          href={i.href}
          fontSize={"xl"}
          fontWeight={"bold"}
          color={"brand.900"}
          fontFamily={`'Raleway', sans-serif`}
          _hover={{
            textColor: "blue.800",
          }}
        >
          {i.label}
        </Link>
      ))}
    </Flex>
  );
}

export default DesktopMenu;
