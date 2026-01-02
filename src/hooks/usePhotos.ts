import useData from "./useData";
import apiClient from "../services/api-client";

interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  src?: { large: string };
}

const usePhotos = () =>
  useData<Photo>(apiClient, "/search?query=Culture&per_page=1", "photos");

export default usePhotos;
