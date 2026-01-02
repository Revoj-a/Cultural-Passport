import useData from "./useData";
import apiClient from "../services/api-client";

export interface Photo {
  id: number;
  url: string;
  src?: { large: string };
}

const useTraditions = () =>
  useData<Photo>(apiClient, "/search?query=Traditions&per_page=20", "photos");

export default useTraditions;
