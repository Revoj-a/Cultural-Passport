import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import DiscoveryHub from "./components/DiscoveryHub";

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

      <GridItem area="aside" bg="gold">
        Aside
      </GridItem>

      <GridItem area="main">
        <DiscoveryHub />
      </GridItem>
    </Grid>
  );
}

export default App;
