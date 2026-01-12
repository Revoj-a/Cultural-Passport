import { Box, Skeleton } from "@chakra-ui/react";

const FlagsSkeleton = () => {
  return (
    <Box flexShrink={0} px={2}>
      <Skeleton
        h="100px"
        w="150px"
        borderRadius="4px"
        startColor="gray.600"
        endColor="gray.800"
      />
    </Box>
  );
};

export default FlagsSkeleton;
