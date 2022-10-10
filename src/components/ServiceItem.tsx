import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import { serviceItem } from "./Services";

function ServiceItem({ title, image, alt }: serviceItem) {
  return (
    <Flex w={250} flexDirection={"column"} gap={4}>
      <Image
        src={image}
        borderRadius={"50%"}
        w={250}
        h={250}
        boxShadow={"lg"}
        alt={alt}
        fit={"cover"}
      />
      <Heading fontSize={"xl"} textAlign={"center"}>
        {title}
      </Heading>
    </Flex>
  );
}

export default ServiceItem;
