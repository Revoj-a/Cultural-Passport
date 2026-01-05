import { useState } from "react";
import SearchBar from "./SearchBar";
import { Box, Heading, VStack } from "@chakra-ui/react";

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
      <Box p={8} color="white">
        <VStack spacing={6} align="stretc">
          <Heading color="gold" fontSize="3xl">
            PhraseBook
          </Heading>
          <SearchBar onSearch={handleSearch} />
          <Box mt={4}>
            {languageQuery ? (
              <Box color="gray.400">Showing results for</Box>
            ) : (
              <Box color="gray.400">Search for a country</Box>
            )}
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default PhraseBook;
