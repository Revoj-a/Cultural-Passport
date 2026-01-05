import { useState } from "react";
import SearchBar from "./SearchBar";
import { Box, Heading, HStack, VStack, Text, Button } from "@chakra-ui/react";
import AboutSection from "./AboutSection";

interface Props {
  onSearch?: (text: string) => void;
}

const PhraseBook = ({ onSearch }: Props) => {
  const [languageQuery, setLanguageQuery] = useState("");
  const handleSearch = (text: string) => {
    setLanguageQuery(text);
    if (onSearch) onSearch(text);
  };
  return (
    <>
      <Box position="relative" width="100%">
        <Box position="absolute" top={9} right={9}>
          <AboutSection />
        </Box>
        <Box p={8} color="white">
          <VStack spacing={6} align="stretch">
            <Heading color="gold" fontSize="3xl">
              PhraseBook
            </Heading>
            <SearchBar onSearch={handleSearch} />
            <HStack spacing={4}>
              {[
                "Greetings",
                "Dining",
                "Emergencies",
                "Navigation",
                "Favorites",
              ].map((cat) => (
                <Button
                  key={cat}
                  variant="outline"
                  size="sm"
                  borderColor="whiteAlpha.300"
                  _hover={{ bg: "gold", color: "black" }}
                >
                  {cat}
                </Button>
              ))}
            </HStack>
            <Box mt={4} mx={1}>
              {languageQuery ? (
                <HStack>
                  <Text color="gray.400" fontSize="sm">
                    Showing results for:
                  </Text>
                  <Text color="gold" fontWeight="bold" fontSize="sm">
                    {languageQuery}
                  </Text>
                </HStack>
              ) : (
                <Text color="gray.400">Search for a country</Text>
              )}
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default PhraseBook;
