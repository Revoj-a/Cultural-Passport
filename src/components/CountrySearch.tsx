import {
  Spinner,
  Text,
  SimpleGrid,
  Box,
  HStack,
  Badge,
  Image,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import useCountry from "../hooks/useCountry";
import getCroppedImageUrl from "../services/image-url";
import noImage from "../assets/no-image.jpg";
import { FaHeart, FaThumbsUp } from "react-icons/fa";

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
    <HStack w="100%" h="800px" overflowY="auto" p={2}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 6 }} spacing={5}>
        {isLoading && <Spinner />}
        {results.map((item) => (
          <Box
            key={item.id}
            role="group"
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            border="1px solid"
            borderColor="whiteAlpha.200"
            bg="whiteAlpha.50"
            cursor="pointer"
            transition="transform 0.15s ease-in-out"
            _hover={{
              transform: "scale(1.03)",
              borderColor: "gold",
              boxShadow: "0px 0px 20px rgba(212, 175, 55, 03)",
            }}
          >
            <HStack
              position="absolute"
              top={2}
              right={2}
              zIndex={2}
              spacing={2}
            >
              <Tooltip
                label="Add this item to a gallery."
                hasArrow
                placement="top"
                bg="white"
              >
                <IconButton
                  aria-label="Heart"
                  icon={<FaHeart />}
                  size="sm"
                  opacity={0}
                  variant="solid"
                  bg="blackAlpha.600"
                  color="white"
                  borderRadius="full"
                  transition="all 0.3s ease"
                  _groupHover={{
                    opacity: 1,
                    transform: "translateY(5px)",
                  }}
                  _hover={{
                    color: "red.500",
                    transform: "scale(1.2)",
                    bg: "blackAlpha.800",
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </Tooltip>
              <Tooltip
                label="Save this item to your likes."
                hasArrow
                placement="top"
                bg="white"
              >
                <IconButton
                  aria-label="Like"
                  icon={<FaThumbsUp />}
                  size="sm"
                  opacity={0}
                  variant="solid"
                  bg="blackAlpha.600"
                  color="white"
                  borderRadius="full"
                  transition="all 0.3 ease"
                  _groupHover={{ opacity: 1, transform: "translateY(5px)" }}
                  _hover={{
                    color: "blue.400",
                    transform: "scale(1.2)",
                    bg: "blackAlpha.800",
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </Tooltip>
            </HStack>
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
