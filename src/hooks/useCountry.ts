import { useQuery } from "@tanstack/react-query";
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
    staleTime: 1000 * 60 * 5,
  });

export default useCountry;
