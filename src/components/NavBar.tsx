import { HStack, Image } from "@chakra-ui/react";
import dice from "../assets/dice.png";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={dice} boxSize="35px" objectFit="cover" />
    </HStack>
  );
};

export default NavBar;
