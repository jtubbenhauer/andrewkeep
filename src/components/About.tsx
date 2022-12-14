import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function About() {
  return (
    <Flex
      flexDirection={"column"}
      align={"center"}
      justify={"center"}
      maxW={820}
      margin={"2rem auto 3rem"}
      gap={4}
      pl={8}
      pr={8}
      id={"about"}
    >
      <Heading fontWeight={"bold"} color={"#0e4f66"}>
        About
      </Heading>
      <Flex flexDirection={"column"} gap={4} fontSize={{ xl: "lg" }}>
        <Text align={"center"}>
          Andrew commenced his career serving as a field engineer in the
          Australian Army, conducting military engineering operations overseas
          and throughout Australia.
        </Text>
        <Text align={"center"}>
          Post achievement of his Bachelor of Engineering, Civil (Hons), Andrew
          has gained over 13 years of work experience as a professional
          engineer, successfully managing projects, studies and sub-contractors,
          and delivering inter-discipline engineering scopes of works across a
          wide variety of design and construction projects.{" "}
        </Text>
        <Text align={"center"}>
          With excellent analytical skills complemented by advanced MS Excel
          skills, Andrew has developed a reputation for effectively collating
          and analysing vast datasets and providing efficient and relevant
          reporting to facilitate decision making for project stakeholders.
        </Text>
        <Text align={"center"}>
          Andrew has an outstanding work ethic, excellent attention to detail,
          and prides himself on building valued relationships with co-workers,
          clients and contractors alike, through effective and honest
          communication, and the provision of high-quality work delivered on
          schedule and within budget.
        </Text>
      </Flex>
    </Flex>
  );
}

export default About;
