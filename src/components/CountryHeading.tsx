import { Flex, Heading } from "@chakra-ui/react";
import CountryFlag from "./CountryFlag";
import useSearchStore from "../store";

const CountryHeading = () => {
  const searchQuery = useSearchStore((s) => s.searchQuery);
  const heading = `${searchQuery}`;

  if (!searchQuery) return null;
  return (
    <Flex
      display="flex"
      alignItems="center"
      position="absolute"
      marginX={7}
      marginY={8}
    >
      <Heading as="h1">{heading}</Heading>
      <CountryFlag />
    </Flex>
  );
};

export default CountryHeading;
