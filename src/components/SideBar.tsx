import {
  Box,
  Divider,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Compass from "../assets/compass.png";
import HomeIcon from "../assets/homepage.png";
import MapIcon from "../assets/foreign.png";
import LocationIcon from "../assets/location.png";
import PhraseBookIcon from "../assets/marketing.png";
import HeritageEventIcon from "../assets/house.png";
import SettingIcon from "../assets/setting.png";
import LogoutIcon from "../assets/logout.png";
import Traveler from "../assets/no-pic.jpg";
import { keyframes } from "@emotion/react";

interface Props {
  name: string;
  icon: string;
}

const listLinks = [
  { name: "Home", icon: HomeIcon },
  { name: "My Collection", icon: MapIcon },
  { name: "Cultural Map", icon: LocationIcon },
];

const specialLizedLinks = [
  { name: "Phrase Book", icon: PhraseBookIcon },
  { name: "Heritage Events", icon: HeritageEventIcon },
];

const settingsLinks = [
  { name: "Settings", icon: SettingIcon },
  { name: "Logout", icon: LogoutIcon },
];

const picAnimate = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

const SideBar = () => {
  const renderLinks = (links: Props[]) =>
    links.map((link) => (
      <ListItem
        key={link.name}
        cursor="pointer"
        role="group"
        transition="background 0.2s"
      >
        <HStack
          spacing={4}
          p="2px"
          minW="max-content"
          justify={{ base: "center", lg: "flex-start" }}
        >
          <Image
            src={link.icon}
            boxSize="25px"
            filter="grayscale(100%)"
            _groupHover={{ filter: "none" }}
          />
          <Text
            display={{ base: "none", lg: "block" }}
            fontSize="md"
            fontWeight="medium"
            whiteSpace="none"
            color="gray.300"
            _groupHover={{ color: "gold" }}
          >
            {link.name}
          </Text>
        </HStack>
        <Box
          h="2px"
          w="0%"
          bg="gold"
          transition="width 0.3s"
          _groupHover={{ w: "100%" }}
          display={{ base: "none", lg: "block" }}
        ></Box>
      </ListItem>
    ));
  return (
    <>
      <Box
        as="nav"
        pos="sticky"
        top="0"
        h="100vh"
        w={{ base: "75px", lg: "240px" }}
        bg="black"
        borderRight="1px solid"
        borderColor="whiteAlpha.200"
        p={{ base: 2, lg: 5 }}
        transition="width 0.3s ease"
      >
        <VStack spacing={8} align="stretch">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              sx={{ perspective: "1000px" }}
              boxSize={{ base: "40px", lg: "100px" }}
              mb={4}
            >
              <Box
                position="relative"
                width="100%"
                height="100%"
                animation={`${picAnimate} 4s infinite linear`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={Compass}
                  position="absolute"
                  inset={0}
                  boxSize="100%"
                  objectFit="contain"
                  style={{ backfaceVisibility: "hidden" }}
                />
                <Image
                  src={Traveler}
                  position="absolute"
                  inset={0}
                  boxSize="100%"
                  objectFit="cover"
                  borderRadius="full"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                ></Image>
              </Box>
            </Box>
            <Text
              color="gold"
              fontWeight="bold"
              fontSize="xs"
              textAlign="center"
              display={{ base: "none", lg: "block" }}
              letterSpacing="2px"
            >
              Lvl 5 - World Historian
            </Text>
          </Box>
          <List spacing={4} letterSpacing="2px">
            {renderLinks(listLinks)}
          </List>
          <Box display={{ base: "none", lg: "block" }}>
            <Divider borderColor="whiteAlpha.300" mb={4} />
            <Text
              fontSize="sm"
              fontWeight="bold"
              color="gray.500"
              textTransform="uppercase"
              textAlign="center"
              letterSpacing="2px"
              mb={2}
            >
              Specialized Features
            </Text>
          </Box>
          <Divider
            display={{ base: "block", lg: "none" }}
            borderColor="whiteAlpha.300"
          />
          <List spacing={4} letterSpacing="2px">
            {renderLinks(specialLizedLinks)}
          </List>
          <Box display={{ base: "none", lg: "block" }}>
            <Divider borderColor="whiteAlpha.300" mb={4} />
            <Text
              fontSize="sm"
              fontWeight="bold"
              color="gray.500"
              textTransform="uppercase"
              textAlign="center"
              mb={2}
            />
          </Box>
          <Divider
            display={{ base: "block", lg: "none" }}
            borderColor="whiteAlpha.300"
          />
          <List spacing={4} letterSpacing="2px">
            {renderLinks(settingsLinks)}
          </List>
        </VStack>
      </Box>
    </>
  );
};

export default SideBar;
