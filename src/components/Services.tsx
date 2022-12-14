import React from "react";
import { Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import imgProject from "../assets/project-man.webp";
import imgDesign from "../assets/plaxis3d-2.jpg";
import imgSite from "../assets/drill-samples.webp";
import ServiceItem from "./ServiceItem";

export interface serviceItem {
  title: string;
  image: string;
  alt: string;
}

const services: Array<serviceItem> = [
  {
    title: "Project Management",
    image: imgProject,
    alt: "Project Management",
  },
  {
    title: "Site Investigation",
    image: imgSite,
    alt: "Geographical Site Investigation",
  },
  {
    title: "Geotechnical Design",
    image: imgDesign,
    alt: "Geotechnical Rock Wall Design",
  },
];

function Services() {
  return (
    <Flex
      bgColor={"#0e4f66"}
      textColor={"white"}
      flexDirection={"column"}
      align={"center"}
      pt={12}
      pb={12}
      pl={4}
      pr={4}
      id={"services"}
    >
      <Heading mb={[10, 10, 12]}>Services</Heading>
      <Flex
        flexWrap={"wrap"}
        align={"center"}
        justify={"center"}
        gap={[12, 10, 10, 20]}
        mb={14}
      >
        {services.map((i) => (
          <ServiceItem
            key={i.title}
            title={i.title}
            image={i.image}
            alt={i.alt}
          />
        ))}
      </Flex>
      <Heading size={"md"} mb={6} textAlign={"center"}>
        Geotechnical Design Services Include:
      </Heading>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={{ md: 14 }}
        fontStyle={"italic"}
        mb={4}
      >
        <UnorderedList fontSize={["sm", "sm", "md"]}>
          <ListItem>Deep and shallow foundation design</ListItem>
          <ListItem>Finite element analysis</ListItem>
          <ListItem>Retaining walls analysis</ListItem>
          <ListItem>Slope stability analysis</ListItem>
          <ListItem>Tailings Storage Facility (TSF) design</ListItem>
          <ListItem>Liquefaction analysis</ListItem>
        </UnorderedList>
        <UnorderedList fontSize={["sm", "sm", "md"]}>
          <ListItem>3D Engineering geological models</ListItem>
          <ListItem>Landfill and mine waste soil covers</ListItem>
          <ListItem>In-situ Block Size Distribution (IBSD) analysis</ListItem>
          <ListItem>Preload design</ListItem>
          <ListItem>Seepage analysis</ListItem>
          <ListItem>Construction support</ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  );
}

export default Services;
