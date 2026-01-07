import { Box, HStack, Image } from "@chakra-ui/react";
import dice from "../assets/dice.png";
import SearchInput from "./SearchInput";
import { keyframes } from "@emotion/react";

const spin = keyframes`
 from { transform: rotate(0deg); }
 to { transform: rotate(360deg); }
`;

interface Props {
  onSearch?: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack
      padding="10px"
      spacing={4}
      width="100%"
      alignItems="center"
      height="60px"
      bg="rgba(255, 255, 255, 0.02)"
      borderBottom="1px solid rgba(255, 215, 0, 0.3)"
    >
      <Box flex="1" minWidth={0}>
        <SearchInput
          onSearch={(searchText) => onSearch && onSearch(searchText)}
        />
      </Box>
      <Box
        p={1}
        borderRadius="full"
        border="2px solid gold"
        boxShadow="0 0 10px gold"
      >
        <Image
          src={dice}
          boxSize="30px"
          objectFit="contain"
          flexShrink={0}
          animation={`${spin} 3s linear infinite`}
          filter="drop-shadow(0, 0, 2px gold)"
        />
      </Box>
    </HStack>
  );
};

export default NavBar;
