import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { type FetchPhotosResponse } from "../services/api-client";

interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  src?: { large: string };
}

const apiClient = new APIClient<Photo>("/search");

const usePhotos = () =>
  useQuery<FetchPhotosResponse<Photo>, Error>({
    queryKey: ["photos", "culture"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          query: "Culture",
          per_page: 1,
        },
      }),
    staleTime: ms("5m"),
  });

export default usePhotos;
