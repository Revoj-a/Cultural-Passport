import { Box, Image, Text } from "@chakra-ui/react";
import useFlags from "../hooks/useFlags";
import { keyframes } from "@emotion/react";

const scroll = keyframes` 
   0% { transform: translateX(0); }
   100% { transform: translateX(-50%); }
`;

const Flags = () => {
  const { flags, error } = useFlags();

  if (!flags || flags.length === 0) return null;

  return (
    <Box
      position="relative"
      overflow="hidden"
      height="180px"
      width="90%"
      whiteSpace="nowrap"
      py={8}
      bg="rgba(10, 25, 41, 0.7)"
      backdropFilter="blur(15px) saturate(150%)"
      borderRadius="xl"
      borderY="3px solid"
      boxShadow="0 10px 30px rgba(0,0,0,0.5)"
      maxW="1700px"
      mx="auto"
      mt={10}
      px={{ base: 4, md: 8 }}
    >
      {error && <Text>{error}</Text>}
      <Box
        display="flex"
        position="absolute"
        width="max-content"
        animation={`${scroll} 40s linear infinite`}
        willChange="transform"
        alignItems="center"
        top="0"
        height="100%"
      >
        {flags.map((flag, index) => (
          <Box key={`${flag.id}-${index}`} flexShrink={0} px={2}>
            <Image
              objectFit="cover"
              src={flag.src?.medium}
              w="150px"
              h="100px"
              borderRadius="4px"
              border="2px solid white"
              boxShadow="dark-lg"
            />
          </Box>
        ))}
        {flags.map((flag, index) => (
          <Box key={`${flag.id}-${index}`} flexShrink={0} px={2}>
            <Image
              objectFit="cover"
              src={flag.src?.medium}
              w="150px"
              h="100px"
              borderRadius="4px"
              border="2px solid white"
              boxShadow="dark-lg"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Flags;
