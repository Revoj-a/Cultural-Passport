import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const ImageSkeleton = () => {
  return (
    <Card>
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default ImageSkeleton;
