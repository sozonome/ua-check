import { Box, Heading, Text } from "@chakra-ui/layout";
import { UAParser } from "ua-parser-js";

const SomeText = () => {
  const parser = new UAParser();

  return (
    <Box textAlign="center">
      <Heading size="sm">Detected User Agent:</Heading>
      <Text fontSize="2xl" fontWeight="bold">
        {parser.getBrowser().name ?? "Cannot Detect UA Name / Unrecognized"}
      </Text>
    </Box>
  );
};

export default SomeText;
