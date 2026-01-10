import {
  Box,
  IconButton,
  VStack,
  Text,
  Heading,
  Center,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaInfoCircle, FaTimes } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionCenter = motion(Center);

interface Phrase {
  native: string;
  translation: string;
  language: string;
  etiquette: string;
}

interface Props {
  phrase: Phrase;
  onClose: () => void;
}

const QuickShowModal = ({ phrase, onClose }: Props) => {
  return (
    <MotionCenter
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      bg="blackAlpha.800"
      zIndex={2000}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <MotionBox
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        w={{ base: "95%", md: "500px" }}
        maxH="90vh"
        overflowY="auto"
        p={{ base: 6, md: 10 }}
        borderRadius="3xl"
        bg="rgba(45, 45, 45, 0.9)"
        backdropFilter="blur(20px)"
        border="1px solid rgba(255, 255, 255, 0.1)"
        boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.7)"
        textAlign="center"
        position="relative"
      >
        <IconButton
          aria-label="Close"
          icon={<FaTimes />}
          position="absolute"
          top={4}
          right={4}
          variant="ghost"
          color="whiteAlpha.600"
          _hover={{ color: "white", bg: "whiteAlpha.200" }}
          onClick={onClose}
        />
        <VStack spacing={6}>
          <Box>
            <Text
              color="gray.400"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="widest"
              mb={2}
            >
              Quick-Show: {phrase.language}
            </Text>
            <Heading
              color="gold"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="700"
              lineHeight="shorter"
              wordBreak="break-word"
              mb={2}
            >
              {phrase.native}
            </Heading>
            <Text fontSize="2xl" color="whiteAlpha.800">
              {phrase.translation}
            </Text>
          </Box>
          <Box
            w="100%"
            pt={6}
            borderTop="1px solid"
            borderColor="whiteAlpha.200"
            textAlign="left"
          >
            <HStack mb={2} color="orange.200">
              <FaInfoCircle size="14px" />
              <Text fontSize="xs" fontWeight="bold" textTransform="uppercase">
                Body Language & Etiquette
              </Text>
            </HStack>
            <Text
              fontSize="sm"
              color="gray.300"
              lineHeight="tall"
              textAlign="justify"
            >
              {phrase.etiquette}
            </Text>
          </Box>
        </VStack>
      </MotionBox>
    </MotionCenter>
  );
};

export default QuickShowModal;
