import {
  Spinner,
  Text,
  SimpleGrid,
  Box,
  HStack,
  Badge,
  Image,
} from "@chakra-ui/react";
import useCountry from "../hooks/useCountry";
import getCroppedImageUrl from "../services/image-url";
import noImage from "../assets/no-image.jpg";

interface Props {
  searchQuery: string;
}

const CountrySearch = ({ searchQuery }: Props) => {
  const { data, isLoading } = useCountry(searchQuery);

  const results = data.filter(
    (item) => item.edmIsShownBy && item.edmIsShownBy.length > 0
  );

  if (!searchQuery) return null;

  return (
    <HStack
      w="100%"
      h="800px"
      overflowY="auto"
      p={2}
      css={{
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-track": { background: "transparent" },
        "&::-webkit-scrollbar-thumb": {
          background: "D4AF37",
          borderRadius: "24px",
        },
      }}
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 6 }} spacing={5}>
        {isLoading && <Spinner />}
        {results.map((item) => (
          <Box
            key={item.id}
            borderRadius="lg"
            overflow="hidden"
            border="1px solid"
            borderColor="whiteAlpha.200"
            bg="whiteAlpha.50"
          >
            {item.edmIsShownBy?.[0] ? (
              <Image
                src={getCroppedImageUrl(item.edmIsShownBy[0])}
                alt={item.title?.[0]}
                objectFit="cover"
                h="200px"
                w="100%"
                fallbackSrc={noImage}
              />
            ) : (
              <Box
                h="200px"
                bg="gray.700"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="gray.500">No Image Available</Text>
              </Box>
            )}
            <Box p={4}>
              <Badge colorScheme="yellow" mb={2} whiteSpace="normal">
                {item.edmcountry?.[0] ||
                  item.dataProvider?.[0] ||
                  "Europeana Collection"}
              </Badge>
              <Text fontWeight="bold" color="white" noOfLines={2}>
                {item.title?.[0] || "No Title"}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </HStack>
  );
};

export default CountrySearch;
