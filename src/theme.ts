import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Montserrat', sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        bg: "black",
        color: "white",
        overflow: "hidden",
      },
      "::-webkit-scrollbar": {
        display: "none",
      },
      body: {
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      },
    },
  },
  components: {
    ListItem: {
      baseStyle: {
        fontWeight: "600",
        letterSpacing: "0.5px",
        _hover: {
          bg: "blackAlpha.50",
        },
      },
    },
  },
});

export default theme;
