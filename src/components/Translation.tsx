import { HStack, VStack, Text, Spinner, IconButton } from "@chakra-ui/react";
import useTranslate from "../hooks/useTranslate";
import { FaPlay } from "react-icons/fa";
import type React from "react";
import { ETIQUETTE_DATA } from "../data/etiquette";

interface Props {
  phrase: string;
  langCode: string;
  langName: string;
  onShowModal: (translatedText: string, cultureNote: string) => void;
}

const Translation = ({ phrase, langCode, langName, onShowModal }: Props) => {
  const { data, isLoading, error } = useTranslate(phrase, langCode);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!data?.translatedText) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(data.translatedText);

    const speechCode =
      langCode === "ar" ? "ar-SA" : langCode === "th" ? "th-TH" : langCode;
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find((v) =>
      v.lang.replace("_", "-").startsWith(speechCode)
    );

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = speechCode;
    }

    utterance.pitch = 1;
    utterance.rate = 0.9;

    window.speechSynthesis.speak(utterance);
  };

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
      onClick={() => {
        if (data?.translatedText) {
          const culturalTip =
            ETIQUETTE_DATA[langCode] ||
            "Please observe local customs and be respectful.";
          onShowModal(data.translatedText, culturalTip);
        }
      }}
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
        aria-label={`Play translation in ${langName}`}
        icon={<FaPlay size="10px" />}
        size="sm"
        isRound
        bg="yellow.300"
        _hover={{ bg: "yellow.400" }}
        onClick={handlePlay}
        isDisabled={isLoading || !data?.translatedText}
      ></IconButton>
    </HStack>
  );
};

export default Translation;
