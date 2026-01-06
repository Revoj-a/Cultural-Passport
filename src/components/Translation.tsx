import { HStack, VStack, Text, Spinner, IconButton } from "@chakra-ui/react";
import useTranslate from "../hooks/useTranslate";
import { FaPlay } from "react-icons/fa";

interface Props {
  phrase: string;
  langCode: string;
  langName: string;
}

const Translation = ({ phrase, langCode, langName }: Props) => {
  const { data, isLoading, error } = useTranslate(phrase, langCode);

  if (error)
    return (
      <Text color="red.300" fontSize="xs">
        Connect to the Docker to see {langName}
      </Text>
    );

  return (
    <HStack
      justify="space-between"
      p={4}
      bg="gray.200"
      borderRadius="lg"
      color="black"
      w="100%"
      boxShadow="md"
    >
      <VStack align="start" spacing={0}>
        <Text fontSize="xs" color="gray.500" fontWeight="bold">
          {langName}
        </Text>
        <Text fontSize="lg" color="black" fontWeight="bold">
          {isLoading ? <Spinner size="xs" /> : data?.translatedText}
        </Text>
      </VStack>
      <IconButton
        aria-label="play"
        icon={<FaPlay size="10px" />}
        size="sm"
        isRound
        bg="yellow.300"
      ></IconButton>
    </HStack>
  );
};

export default Translation;
