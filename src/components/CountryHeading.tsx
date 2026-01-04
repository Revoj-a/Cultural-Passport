import { Heading } from "@chakra-ui/react";

interface Props {
  searchQuery: string;
}

const CountryHeading = ({ searchQuery }: Props) => {
  const heading = `${searchQuery}`;
  return <Heading as="h1">{heading}</Heading>;
};

export default CountryHeading;
