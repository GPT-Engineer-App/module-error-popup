import React from "react";
import { Container, Text, VStack, IconButton } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <IconButton aria-label="Launch Rocket" icon={<FaRocket />} size="lg" />
      </VStack>
    </Container>
  );
};

export default Index;
