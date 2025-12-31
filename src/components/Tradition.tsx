import { Box, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import useTraditions from "../hooks/useTraditions";
import ImageSkeleton from "./ImageSkeleton";

const Tradition = () => {
  const { traditions, error, isLoading } = useTraditions();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Heading mx={4}>Traditions</Heading>
      <Box>
        {error && <Text>{error}</Text>}
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4, xl: 5 }}
          spacing={3}
          m={2}
          overflowX="auto"
          p={3}
        >
          {isLoading &&
            skeletons.map((skeleton) => <ImageSkeleton key={skeleton} />)}
          {traditions.map((tradition) => (
            <div key={tradition.id}>
              <Image
                boxSize="130px"
                objectFit="cover"
                src={tradition.src.large}
                alt="Pexels"
                borderRadius="lg"
                flexShrink={0}
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
              />
            </div>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Tradition;
