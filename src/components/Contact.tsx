import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import image from "../assets/contact.jpg";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Bars } from "react-loader-spinner";

function Contact() {
  const [loading, setLoading] = useState(false);

  return (
    <Box id={"contact"}>
      <Flex flexDirection={{ base: "column", lg: "row" }}>
        <Box flex={1}>
          <Image
            src={image}
            objectFit={"cover"}
            objectPosition={"center"}
            h={"100%"}
          />
        </Box>
        <Flex
          flex={1}
          flexDirection={"column"}
          align={"center"}
          justify={"center"}
          p={8}
          mb={4}
        >
          <Heading color={"#0e4f66"}>Contact</Heading>
          <Flex
            pt={8}
            flexDirection={"column"}
            gap={4}
            mt={-2}
            minW={{ md: 400 }}
            align={"center"}
          >
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input borderColor={"gray.400"} boxShadow={"sm"} />
            </FormControl>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input type={"email"} borderColor={"gray.400"} boxShadow={"sm"} />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea borderColor={"gray.400"} boxShadow={"sm"} size={"lg"} />
            </FormControl>
            <Button
              bgColor={"brand.900"}
              color={"white"}
              rightIcon={<ArrowForwardIcon />}
              _hover={{ bgColor: "blue.800" }}
              size={["lg"]}
            >
              Submit
            </Button>
            <Bars
              height="50"
              width="50"
              color="#5cafce"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Contact;
