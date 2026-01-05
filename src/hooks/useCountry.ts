import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import europeanaClient from "../services/europeana-client";

interface Country {
  id: string;
  title: string[];
  edmcountry?: string[];
  edmIsShownBy?: string[];
  dcDescription: string[];
  dataProvider?: string[];
}

interface FetchCountryResponse {
  items: Country[];
}

const useCountry = (searchQuery: string) =>
  useQuery<Country[], Error>({
    queryKey: ["countries", searchQuery],
    queryFn: () =>
      europeanaClient
        .get<FetchCountryResponse>("/search.json", {
          params: {
            query: searchQuery,
            profile: "rich",
          },
        })
        .then((res) => res.data.items),
    enabled: !!searchQuery,
    staleTime: ms("5m"),
  });

export default useCountry;
