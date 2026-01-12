import { Box, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

const CountryCardSkeleton = () => {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg="whiteAlpha.50"
      border="1px solid"
      borderColor="whiteAlpha.200"
      w="100%"
    >
      <Skeleton h="200px" w="100%" />
      <Box p={4}>
        <VStack align="start" spacing={3}>
          <Skeleton height="18px" width="80px" borderRadius="md" />
          <SkeletonText noOfLines={2} spacing="2" width="100%" />
        </VStack>
      </Box>
    </Box>
  );
};

export default CountryCardSkeleton;
