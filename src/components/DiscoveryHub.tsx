import { Box, Heading, Image, Text } from "@chakra-ui/react";
import usePhotos from "../hooks/usePhotos";

const DiscoveryHub = () => {
  const { photos, error } = usePhotos();
  return (
    <>
      <Heading mx={4}>Discovery Hub</Heading>
      <Box p={3}>
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
