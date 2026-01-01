import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import DiscoveryHub from "./components/DiscoveryHub";
import Tradition from "./components/Tradition";
import Flags from "./components/Flags";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "aside"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "240px 1fr",
      }}
      bg="black"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside">
        <SideBar />
      </GridItem>
      <GridItem area="main">
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={2}
          alignItems="stretch"
        >
          <Box
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="xl"
            display="flex"
            flexDirection="column"
            m={5}
          >
            <DiscoveryHub />
          </Box>
          <Box
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="xl"
            display="flex"
            flexDirection="column"
            m={5}
          >
            <Tradition />
          </Box>
        </SimpleGrid>
        <Box mt={10}>
          <Flags />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
