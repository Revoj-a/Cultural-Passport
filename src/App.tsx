import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import DiscoveryHub from "./components/DiscoveryHub";
import Tradition from "./components/Tradition";

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
      <GridItem area="aside">Aside</GridItem>
      <GridItem area="main">
        <Flex align="flex-start" direction={{ base: "column", lg: "row" }}>
          <Box flex="1">
            <DiscoveryHub />
          </Box>
          <Box flex="1">
            <Tradition />
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;
