import { useQuery } from "@tanstack/react-query";
import APIClient, { type FetchPhotosResponse } from "../services/api-client";

interface Photo {
  id: number;
  url: string;
  src?: { large: string };
}

const apiClient = new APIClient<Photo>("/search");

const useTraditions = () =>
  useQuery<FetchPhotosResponse<Photo>, Error>({
    queryKey: ["photos", "traditions"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          query: "Traditions",
          per_page: 20,
        },
      }),
    staleTime: Infinity,
  });

export default useTraditions;
