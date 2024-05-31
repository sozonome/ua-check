import { Box, Button, Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

const CTASection = () => {
  return (
    <Box textAlign="center">
      <Link
        _hover={undefined}
        href="https://github.com/sozonome/vite-react-chakra-starter"
      >
        <Button leftIcon={<AiFillGithub />}>Open in Github</Button>
      </Link>
    </Box>
  );
};
export default CTASection;
