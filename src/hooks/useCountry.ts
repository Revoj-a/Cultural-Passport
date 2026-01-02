import useData from "./useData";
import europeanaClient from "../services/europeana-client";

export interface Country {
  id: string;
  title: string[];
  edmcountry?: string[];
  edmIsShownBy?: string[];
  dcDescription: string[];
  dataProvider?: string[];
}

const useCountry = (searchQuery: string) =>
  useData<Country>(
    europeanaClient,
    `/search.json?query=${searchQuery}`,
    "items"
  );

export default useCountry;
