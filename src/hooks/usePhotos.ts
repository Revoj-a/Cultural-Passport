import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  src?: { large: string };
}

interface FetchPhotosResponse {
  photos: Photo[];
}

const usePhotos = () =>
  useQuery<Photo[], Error>({
    queryKey: ["photos", "culture"],
    queryFn: () =>
      apiClient
        .get<FetchPhotosResponse>("/search?query=Culture&per_page=1")
        .then((res) => res.data.photos),
    staleTime: 1000 * 60 * 5,
  });

export default usePhotos;
