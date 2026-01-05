import { Box, SimpleGrid } from "@chakra-ui/react";
import DiscoveryHub from "../components/DiscoveryHub";
import Tradition from "../components/Tradition";
import Flags from "../components/Flags";
import CountryHeading from "../components/CountryHeading";
import CountrySearch from "../components/CountrySearch";
import { useOutletContext } from "react-router-dom";

interface ContextType {
  searchQuery: string;
}

const HomePage = () => {
  const { searchQuery } = useOutletContext<ContextType>();
  return (
    <Box p={5}>
      <Box>
        <CountryHeading searchQuery={searchQuery} />
      </Box>
      <Box py={2}>
        <CountrySearch searchQuery={searchQuery} />
      </Box>
      {!searchQuery && (
        <>
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
          <Box mt={8}>
            <Flags />
          </Box>
        </>
      )}
    </Box>
  );
};

export default HomePage;
