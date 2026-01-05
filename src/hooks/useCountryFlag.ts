import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import restcountriesClient from "../services/restcountries-client";

interface CountryData {
  flags: {
    png: string;
    svg: string;
  };
}

const useCountryFlag = (searchQuery: string) =>
  useQuery<CountryData[], Error>({
    queryKey: ["countryFlag", searchQuery],
    queryFn: () =>
      restcountriesClient
        .get<CountryData[]>(`/name/${searchQuery}`)
        .then((res) => res.data),
    enabled: !!searchQuery,
    staleTime: ms("24h"),
  });

export default useCountryFlag;
