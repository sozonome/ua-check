import { Box, Heading, Text } from '@chakra-ui/react';
import { UAParser } from 'ua-parser-js';

const parser = new UAParser();
const browserName =
  parser.getBrowser().name ?? 'Cannot Detect UA Name / Unrecognized';
const deviceType = parser.getDevice().type;
const osName = parser.getOS().name;

const SomeText = () => {
  return (
    <Box textAlign="center">
      <Heading size="sm">Detected User Agent:</Heading>
      <Text fontSize="2xl" fontWeight="bold">
        {browserName}
      </Text>
      {osName ? <Text>OS: {osName}</Text> : null}
      {deviceType ? <Text>Device Type: {deviceType}</Text> : null}
    </Box>
  );
};

export default SomeText;
