import { useQuery } from "@tanstack/react-query";
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
    staleTime: 1000 * 60 * 60 * 24,
  });

export default useCountryFlag;
