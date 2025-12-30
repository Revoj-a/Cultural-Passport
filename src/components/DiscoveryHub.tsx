import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  src: { large: string };
}

interface FetchPhotoResponse {
  photos: Photo[];
}

const DiscoveryHub = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchPhotoResponse>("/search?query=Culture&per_page=1")
      .then((res) => setPhotos(res.data.photos))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      <Heading mx={4}>Discovery Hub</Heading>
      <Box padding={4}>
        {error && <Text>{error}</Text>}
        {photos.map((photo) => (
          <div key={photo.id}>
            <Image src={photo.src.large} alt="Pexels" borderRadius="lg" />
          </div>
        ))}
      </Box>
    </>
  );
};

export default DiscoveryHub;
