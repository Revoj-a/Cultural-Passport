import { Box, Skeleton } from "@chakra-ui/react";

const ImageSkeleton = () => {
  return (
    <Box boxSize="120px" borderRadius="lg" overflow="hidden">
      <Skeleton height="100%" width="100%" />
    </Box>
  );
};

export default ImageSkeleton;
