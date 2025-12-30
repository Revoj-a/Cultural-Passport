import { Box, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import useTraditions from "../hooks/useTraditions";

const Tradition = () => {
  const { traditions, error } = useTraditions();
  return (
    <>
      <Heading mx={4}>Traditions</Heading>
      <Box>
        {error && <Text>{error}</Text>}
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4, xl: 6 }}
          spacing={3}
          m={2}
          overflowX="auto"
          p={2}
        >
          {traditions.map((tradition) => (
            <div key={tradition.id}>
              <Image
                boxSize="160px"
                objectFit="cover"
                src={tradition.src.large}
                alt="Pexels"
                borderRadius="lg"
                flexShrink={0}
              />
            </div>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Tradition;
