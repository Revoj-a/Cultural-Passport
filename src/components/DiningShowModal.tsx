import {
  Box,
  Center,
  IconButton,
  VStack,
  Text,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaTimes, FaUtensils } from "react-icons/fa";
import type { ActiveSelection } from "../entities/ActiveSelection";

const MotionBox = motion(Box);
const MotionCenter = motion(Center);

interface Props {
  phrase: ActiveSelection;
  onClose: () => void;
}

const DiningModal = ({ phrase, onClose }: Props) => {
  return (
    <MotionCenter
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      bg="blackAlpha.800"
      zIndex={2000}
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
            <Text color="orange.200" fontSize="xs" fontWeight="bold">
              DINING IN: {phrase.language}
            </Text>
            <Heading
              color="gold"
              fontSize={{ base: "3xl", md: "5xl" }}
              my={2}
              wordBreak="break-word"
            >
              {phrase.native}
            </Heading>
            <Text fontSize="xl" fontStyle="italic">
              {phrase.translation}
            </Text>
          </Box>
          <Box
            w="100%"
            pt={6}
            borderTop="1px solid"
            borderColor="whiteAlpha.300"
            textAlign="left"
          >
            <HStack mb={2} color="orange.200">
              <FaUtensils size="14px" />
              <Text fontSize="xs" fontWeight="bold" textTransform="uppercase">
                Table Manners & Gestures
              </Text>
            </HStack>
            <Text fontSize="sm" lineHeight="tall" textAlign="justify">
              {phrase.info}
            </Text>
          </Box>
        </VStack>
      </MotionBox>
    </MotionCenter>
  );
};

export default DiningModal;
