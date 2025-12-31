import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import DiscoveryHub from "./components/DiscoveryHub";
import Tradition from "./components/Tradition";
import Flags from "./components/Flags";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "aside"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside"></GridItem>
      <GridItem area="main" my={2}>
        <Flex align="flex-start" direction={{ base: "column", lg: "row" }}>
          <Box>
            <DiscoveryHub />
          </Box>
          <Box>
            <Tradition />
          </Box>
        </Flex>
        <Box>
          <Flags />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
