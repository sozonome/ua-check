import { Grid } from "@chakra-ui/layout";

import SomeImage from "./components/SomeImage";
import SomeText from "./components/SomeText";

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText />
      <SomeImage />
    </Grid>
  );
};

export default Home;
