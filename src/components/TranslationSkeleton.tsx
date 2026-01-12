import { HStack, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react";

const TranslationSkeleton = () => {
  return (
    <HStack
      justify="space-between"
      p={4}
      bg="gray.100"
      borderRadius="lg"
      w="100%"
    >
      <VStack align="start" spacing={2} w="80%">
        <Skeleton height="10px" width="40px" />
        <Skeleton height="20px" width="100%" />
      </VStack>
      <SkeletonCircle size="8" />
    </HStack>
  );
};

export default TranslationSkeleton;
