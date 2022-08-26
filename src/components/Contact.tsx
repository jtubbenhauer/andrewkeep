import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import image from "../assets/contact.webp";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Box id={"contact"}>
      <Flex flexDirection={{ base: "column", lg: "row" }}>
        <Box flex={1}>
          <Image
            src={image}
            objectFit={"cover"}
            objectPosition={"center"}
            h={"100%"}
            alt={"Man Typing At Laptop"}
          />
        </Box>
        <ContactForm />
      </Flex>
    </Box>
  );
}

export default Contact;
