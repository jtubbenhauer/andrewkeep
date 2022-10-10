import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      bgColor={"#0e4f66"}
      align={"center"}
      justify={"center"}
      color={"white"}
      p={6}
    >
      <Text textAlign={'center'}>
        © 2022 Andrew Keep. ABN 80 364 711 648 | Website by{" "}
        <Link href={"https://tubbs.dev"} color={"blue.100"}>
          Jack Tubbenhauer
        </Link>
      </Text>
    </Flex>
  );
}

export default Footer;
