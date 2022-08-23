import React from "react";
import heroImage from "../assets/edouard-tamba-J-hYMYa2jY8-unsplash.jpg";
import { Box, Image } from "@chakra-ui/react";

function Hero() {
  return (
    <Box position={"relative"}>
      <Box
        bgColor={"blackAlpha.500"}
        w={"100%"}
        h={"100%"}
        position={"absolute"}
      ></Box>
      <Image
        src={heroImage}
        maxH={800}
        w={"100%"}
        overflow={"hidden"}
        objectFit={"cover"}
      />
    </Box>
  );
}

export default Hero;
