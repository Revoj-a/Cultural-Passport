import { HStack, Image } from "@chakra-ui/react";
import dice from "../assets/dice.png";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <SearchInput />
      <Image src={dice} boxSize="35px" objectFit="cover" />
    </HStack>
  );
};

export default NavBar;
