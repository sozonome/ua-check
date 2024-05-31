import { Box, Image, Link, useBreakpointValue } from '@chakra-ui/react';

const SomeImage = () => {
  const imageSize = useBreakpointValue({
    base: 150,
    sm: 200,
    md: 400,
  });

  return (
    <>
      <Box textAlign="center" marginX="auto" maxWidth={[280, 400]}>
        <Image width={imageSize} src="/assets/Building blocks-amico.svg" />
        <Link fontSize="xs" href="https://stories.freepik.com/web" isExternal>
          Illustration by Freepik Stories
        </Link>
      </Box>
    </>
  );
};

export default SomeImage;
