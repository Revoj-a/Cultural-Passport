import { Box, HStack, Image, Tooltip } from "@chakra-ui/react";
import aboutIcon from "../assets/about.png";
import loginIcon from "../assets/key.png";
import userProfileIcon from "../assets/user-profile.png";

const AboutSection = () => {
  return (
    <HStack spacing={4} cursor="pointer">
      <Tooltip
        label="About"
        placement="bottom-end"
        bg="yellow.200"
        fontWeight="bold"
      >
        <Image src={aboutIcon} boxSize="25px" />
      </Tooltip>
      <Tooltip
        label="Sign In"
        placement="bottom-end"
        bg="yellow.200"
        fontWeight="bold"
      >
        <Image src={loginIcon} boxSize="25px" />
      </Tooltip>
      <Box position="relative" display="inline-block">
        <Image src={userProfileIcon} boxSize="25px"></Image>
        <Box
          position="absolute"
          top="-2px"
          right="-2px"
          width="10px"
          height="10px"
          bg="red.500"
          borderRadius="full"
          border="2px solid white"
        />
      </Box>
    </HStack>
  );
};

export default AboutSection;
