import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import usePhotos from "../hooks/usePhotos";

const DiscoveryHub = () => {
  const { photos, error } = usePhotos();
  return (
    <>
      <Box px={{ base: 4, md: 6, lg: 10 }}>
        <Heading
          size={{ base: "md", md: "lg" }}
          my={{ base: 4, md: 7 }}
          color="gold"
          letterSpacing="2px"
        >
          Discovery Hub
        </Heading>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 1 }} spacing={5}>
          {photos.map((photo) => (
            <Box key={photo.id}>
              <Image
                src={photo.src?.large}
                borderRadius="lg"
                maxW="100%"
                mb={{ base: 10 }}
                w={{ base: "100%", md: "100%" }}
                h="auto"
                objectFit="cover"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default DiscoveryHub;
