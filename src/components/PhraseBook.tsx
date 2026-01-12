import { useState } from "react";
import SearchBar from "./SearchBar";
import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import AboutSection from "./AboutSection";
import Translation from "./Translation";
import { AnimatePresence } from "framer-motion";
import QuickShowModal from "./QuickShowModal";
import DiningModal from "./DiningShowModal";
import EmergenciesShowModal from "./EmergenciesShowModal";
import NavigationShowModal from "./NavigationShowModal";
import FavoritesShowModal from "./FavoritesShowModal";
import { type ActiveSelection } from "../entities/ActiveSelection";

const PhraseBook = () => {
  const [languageQuery, setLanguageQuery] = useState("");

  const [activeSelection, setActiveSelection] =
    useState<ActiveSelection | null>(null);

  const categories: Record<string, string> = {
    Greetings: "Hello, nice to meet you!",
    Dining: "Where is the best local restaurant?",
    Emergencies: "I need help, please.",
    Navigation: "How do I get to the city center?",
    Favorites: "This is my favorite place!",
  };

  const targetLanguages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "ja", name: "Japanese" },
    { code: "tl", name: "Tagalog" },
    { code: "ko", name: "Korean" },
    { code: "fr", name: "French" },
    { code: "it", name: "Italian" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
    { code: "ar", name: "Arabic" },
    { code: "ru", name: "Russian" },
    { code: "pt", name: "Portuguese" },
    { code: "vi", name: "Vietnamese" },
    { code: "th", name: "Thailand" },
  ];

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
            <SearchBar onSearch={(text) => setLanguageQuery(text)} />
            <HStack spacing={4}>
              {Object.keys(categories).map((cat) => (
                <Button
                  key={cat}
                  onClick={() => {
                    setActiveSelection(null);
                    setLanguageQuery(categories[cat]);
                  }}
                  size="sm"
                  variant="outline"
                  bg={
                    languageQuery === categories[cat] ? "gold" : "transparent"
                  }
                  color={languageQuery === categories[cat] ? "black" : "white"}
                  borderColor="whiteAlpha.300"
                  _hover={{ bg: "gold", color: "black" }}
                >
                  {cat}
                </Button>
              ))}
            </HStack>
            <Box mt={4}>
              {languageQuery && (
                <VStack spacing={3} align="stretch">
                  <Text color="gray.400" fontSize="sm">
                    Translating:{" "}
                    <Text as="span" color="gold">
                      {languageQuery}
                    </Text>
                  </Text>

                  <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4} mt={4}>
                    {targetLanguages.map((lang) => (
                      <Translation
                        key={lang.code}
                        phrase={languageQuery}
                        langCode={lang.code}
                        langName={lang.name}
                        onSelect={(selection) => setActiveSelection(selection)}
                      />
                    ))}
                  </SimpleGrid>
                </VStack>
              )}
            </Box>
            <AnimatePresence>
              {activeSelection?.type === "general" && (
                <QuickShowModal
                  phrase={{
                    ...activeSelection,
                    etiquette: activeSelection.info,
                  }}
                  onClose={() => setActiveSelection(null)}
                />
              )}
              {activeSelection?.type === "dining" && (
                <DiningModal
                  phrase={{ ...activeSelection, gesture: activeSelection.info }}
                  onClose={() => setActiveSelection(null)}
                />
              )}
              {activeSelection?.type === "emergency" && (
                <EmergenciesShowModal
                  phrase={{
                    ...activeSelection,
                    emergencyInfo: activeSelection.info,
                  }}
                  onClose={() => setActiveSelection(null)}
                />
              )}
              {activeSelection?.type === "navigation" && (
                <NavigationShowModal
                  phrase={{
                    ...activeSelection,
                    navigationInfo: activeSelection.info,
                  }}
                  onClose={() => setActiveSelection(null)}
                />
              )}
              {activeSelection?.type === "favorites" && (
                <FavoritesShowModal
                  phrase={{
                    ...activeSelection,
                    favoriteInfo: activeSelection.info,
                  }}
                  onClose={() => setActiveSelection(null)}
                />
              )}
            </AnimatePresence>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default PhraseBook;
