import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const ImageSkeleton = () => {
  return (
    <Card width="120px" borderRadius="lg">
      <Skeleton height="35px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default ImageSkeleton;
