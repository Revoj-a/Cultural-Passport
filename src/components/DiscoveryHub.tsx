import { Box, Heading, Image, Text } from "@chakra-ui/react";
import usePhotos from "../hooks/usePhotos";

const DiscoveryHub = () => {
  const { photos, error } = usePhotos();
  return (
    <>
      <Heading size="lg" my={5} color="gold" letterSpacing="tight">
        Discovery Hub
      </Heading>
      <Box>
        {error && <Text>{error}</Text>}
        {photos.map((photo) => (
          <div key={photo.id}>
            <Image src={photo.src.large} alt="Pexels" borderRadius="lg" />
          </div>
        ))}
      </Box>
    </>
  );
};

export default DiscoveryHub;
