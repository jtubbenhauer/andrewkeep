import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Bars } from "react-loader-spinner";
import React, { SyntheticEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSent, setIsSent] = useState<boolean>();

  const handleSubmit = (e: SyntheticEvent) => {
    setLoading(true);
    e.preventDefault();

    let templateParams = {
      user_name: fullName,
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        "gmail_service",
        "andrew_contact_form",
        templateParams,
        import.meta.env.VITE_EMAILJS_KEY
      )
      .then(
        () => {
          setLoading(false);
          setIsSent(true);
          setStatusMessage("Email sent");
        },
        () => {
          setLoading(false);
          setIsSent(false);
          setStatusMessage("Email failed. Please try again");
        }
      );
  };

  return (
    <Flex
      flex={1}
      flexDirection={"column"}
      align={"center"}
      justify={"center"}
      p={8}
      mb={4}
      position={"relative"}
    >
      <Heading color={"#0e4f66"}>Contact</Heading>
      <Flex
        pt={8}
        flexDirection={"column"}
        gap={4}
        mt={-2}
        minW={{ md: 400 }}
        align={"center"}
        as={"form"}
      >
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            borderColor={"gray.400"}
            boxShadow={"sm"}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input
            type={"email"}
            borderColor={"gray.400"}
            boxShadow={"sm"}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea
            borderColor={"gray.400"}
            boxShadow={"sm"}
            size={"lg"}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <Button
          bgColor={"brand.900"}
          color={"white"}
          rightIcon={<ArrowForwardIcon />}
          _hover={{ bgColor: "blue.800" }}
          size={["lg"]}
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
        <Box position={"absolute"} left={"46%"} top={"50%"}>
          <Bars
            height="50"
            width="50"
            color="#5cafce"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loading}
          />
        </Box>
        <Text height={"24px"} color={isSent ? "green" : "red"}>
          {statusMessage}
        </Text>
      </Flex>
    </Flex>
  );
}
