import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Link to="/">
        <Heading as="h1" size="sm">
          UA Check
        </Heading>
        <Text fontSize={["xs", "sm"]}>User Agent Detect</Text>
      </Link>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
