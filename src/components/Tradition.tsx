import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useTraditions from "../hooks/useTraditions";
import ImageSkeleton from "./ImageSkeleton";

const Tradition = () => {
  const { data, error, isLoading } = useTraditions();

  const SKELETON_COUNT = 20;
  const skeletons = Array.from({ length: SKELETON_COUNT }, (_, i) => i);

  if (error) return <Text color="red">{error.message}</Text>;
  return (
    <Box px={{ base: 2, lg: 6 }} h="100%">
      <Heading size="lg" mt={5} mx={2} mb={4} color="gold" letterSpacing="2px">
        Traditions
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={2} m={1} p={1}>
        {isLoading &&
          skeletons.map((skeleton) => <ImageSkeleton key={skeleton} />)}
        {!isLoading &&
          data?.photos?.map((tradition) => (
            <Box
              key={tradition.id}
              role="group"
              position="relative"
              cursor="pointer"
              overflow="visible"
            >
              <Box
                boxSize="120px"
                position="relative"
                overflow="hidden"
                borderRadius="lg"
                boxShadow="md"
                bg="black"
                transition="all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                _groupHover={{
                  transform: "translateY(-12px) rotate(1deg)",
                  boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.6)",
                  borderColor: "gold",
                }}
                border="1px solid"
                borderColor="whiteAlpha.200"
              >
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={tradition.src?.large}
                  borderRadius="lg"
                  flexShrink={0}
                  transition="transform 0.5s ease"
                  _groupHover={{ transform: "scale(1.5)" }}
                />
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%) scale(2) rotate(-20deg)"
                  opacity={0}
                  zIndex={2}
                  transition="all 0.4s ease"
                  _groupHover={{
                    opacity: 0.8,
                    transform: "translate(-50%, -50%) scale(1) rotate(-15deg)",
                  }}
                  pointerEvents="none"
                >
                  <Box
                    border="4px solid gold"
                    color="gold"
                    px={2}
                    py={1}
                    fontSize="xs"
                    fontWeight="black"
                    borderRadius="sm"
                    textTransform="uppercase"
                  >
                    Certified
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Tradition;
