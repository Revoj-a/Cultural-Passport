import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { type FetchPhotosResponse } from "../services/api-client";

interface Photo {
  id: number;
  url: string;
  src?: { medium: string };
}

const apiClient = new APIClient<Photo>("/search");

const useFlags = () =>
  useQuery<FetchPhotosResponse<Photo>, Error>({
    queryKey: ["photos", "flags"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          query: "Flags",
          per_page: 10,
        },
      }),
    staleTime: ms("5m"),
  });

export default useFlags;
