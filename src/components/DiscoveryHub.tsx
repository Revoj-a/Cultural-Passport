import { Box, Heading, Image, Text } from "@chakra-ui/react";
import usePhotos from "../hooks/usePhotos";

const DiscoveryHub = () => {
  const { photos, error } = usePhotos();
  return (
    <>
      <Box px={{ base: 2, lg: 5 }}>
        <Heading size="lg" my={7} color="gold" letterSpacing="tight">
          Discovery Hub
        </Heading>
        {error && <Text>{error}</Text>}
        {photos.map((photo) => (
          <Box key={photo.id} h="calc(100% - 60px)">
            <Image
              src={photo.src.large}
              borderRadius="lg"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default DiscoveryHub;
