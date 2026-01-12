import { Box, Image } from "@chakra-ui/react";
import useCountryFlag from "../hooks/useCountryFlag";
import useSearchStore from "../store";

const CountryFlag = () => {
  const searchQuery = useSearchStore((s) => s.searchQuery);
  const { data, isLoading } = useCountryFlag(searchQuery);

  if (isLoading || !data?.[0]) return null;

  return (
    <Box ml={4} display="flex" alignItems="center">
      <Image
        src={data[0].flags.png}
        h="30px"
        borderRadius="md"
        boxShadow="sm"
        border="1px solid"
        borderColor="whiteAlpha.300"
      ></Image>
    </Box>
  );
};

export default CountryFlag;
