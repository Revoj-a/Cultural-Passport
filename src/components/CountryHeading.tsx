import { Flex, Heading } from "@chakra-ui/react";
import CountryFlag from "./CountryFlag";

interface Props {
  searchQuery: string;
}

const CountryHeading = ({ searchQuery }: Props) => {
  const heading = `${searchQuery}`;
  return (
    <Flex
      display="flex"
      alignItems="center"
      position="absolute"
      marginX={7}
      marginY={8}
    >
      <Heading as="h1">{heading}</Heading>
      <CountryFlag searchQuery={searchQuery} />
    </Flex>
  );
};

export default CountryHeading;
