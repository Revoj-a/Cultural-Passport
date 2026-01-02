import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import usePhotos from "../hooks/usePhotos";

const DiscoveryHub = () => {
  const { data } = usePhotos();
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
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 1 }} spacing={5}>
          {data.map((photo) => (
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
