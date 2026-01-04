import useData from "./useData";
import restcountriesClient from "../services/restcountries-client";

interface CountryData {
  flags: {
    png: string;
    svg: string;
  };
}

const useCountryFlag = (searchQuery: string) =>
  useData<CountryData>(restcountriesClient, `/name/${searchQuery}`, "", {}, [
    searchQuery,
  ]);
export default useCountryFlag;
