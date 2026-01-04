import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface Photo {
  id: number;
  url: string;
  src?: { medium: string };
}

interface FetchFlagsResponse {
  photos: Photo[];
}

const useFlags = () =>
  useQuery<Photo[], Error>({
    queryKey: ["photos", "flags"],
    queryFn: () =>
      apiClient
        .get<FetchFlagsResponse>("/search?query=Flags&per_page=10")
        .then((res) => res.data.photos),
    staleTime: 1000 * 60 * 5,
  });

export default useFlags;
