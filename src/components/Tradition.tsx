import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Country {
  country: string;
}

const Tradition = ({ country }: Country) => {
  const [tradition, setTradition] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!country) return;

    axios
      .get(`https://en.wikipedia.org/api/rest_v1/page/summary/${country}`)
      .then((res) => {
        setTradition(res.data.extract);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching traditions:", err);
        setTradition("Could not load tradition data.");
        setLoading(false);
      });
  }, [country]);
  return (
    <Box p={5} textAlign="center">
      <Heading mb={4}>Tradition {country}</Heading>
      {loading ? (
        <Spinner />
      ) : (
        <Box maxW="800px" mx="auto">
          <Text fontSize="lg" lineHeight="tall" textAlign="justify">
            {tradition}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Tradition;
