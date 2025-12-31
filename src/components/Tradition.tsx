import { Box, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";
import useTraditions from "../hooks/useTraditions";
import ImageSkeleton from "./ImageSkeleton";

const Tradition = () => {
  const { traditions, error, isLoading } = useTraditions();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Box mt={8}>
        <Heading size="lg" mt={3} mx={6} color="gold" letterSpacing="tight">
          Traditions
        </Heading>
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
            <Box
              key={tradition.id}
              role="group"
              position="relative"
              cursor="pointer"
              overflow="visible"
            >
              <Box
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
                  boxSize="125px"
                  objectFit="cover"
                  src={tradition.src.large}
                  borderRadius="lg"
                  flexShrink={0}
                  transition="transform 0.5s ease"
                  _groupHover={{ transform: "scale(1.1)" }}
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
    </>
  );
};

export default Tradition;
