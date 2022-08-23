import React from "react";
import heroImage from "../assets/jr-harris-5DNQ8IPDuuw-unsplash.webp";
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Hero() {
  return (
    <Flex
      bgImage={heroImage}
      h={{ base: 600, md: 700 }}
      position={"relative"}
      align={"center"}
      bgSize={"cover"}
      bgPosition={"center"}
    >
      <Box></Box>
      <Flex
        pl={{ base: 8, md: 14, lg: 20, xl: "16rem" }}
        pr={{ base: 8, md: 14, lg: 24 }}
        zIndex={1}
        flexDirection={"column"}
        gap={8}
        maxW={820}
      >
        <Heading size={{ base: "3xl", md: "3xl", lg: "4xl" }} color={"white"}>
          Andrew Keep
        </Heading>
        <Text
          color={"white"}
          fontSize={["sm", "lg", "xl"]}
          mt={"-2rem"}
          fontStyle={"italic"}
        >
          Principal Engineer, MIEAust, CPEng, NER, RPEQ
        </Text>
        <Text color={"white"} maxW={420} fontSize={{ md: "xl" }}>
          Andrew has over 13 years of work experience as a professional
          engineer, successfully managing projects, studies and sub-contractors,
          and delivering inter-discipline engineering scopes of works across a
          wide variety of design and construction projects.
        </Text>
        <Link href={"#contact"}>
          <Button
            w={180}
            bgColor={"brand.900"}
            color={"white"}
            rightIcon={<ArrowForwardIcon />}
            _hover={{ bgColor: "blue.800" }}
            size={["md", "lg"]}
          >
            Get In Touch
          </Button>
        </Link>
      </Flex>
      <Box
        w={"100%"}
        h={"100%"}
        bgColor={"blackAlpha.600"}
        position={"absolute"}
        zIndex={"0"}
      ></Box>
    </Flex>
  );
}

export default Hero;
