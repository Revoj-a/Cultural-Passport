import useData from "./useData";
import apiClient from "../services/api-client";

interface Photo {
  id: number;
  url: string;
  src?: { medium: string };
}

const useFlags = () =>
  useData<Photo>(apiClient, "/search?query=Flags&per_page=10", "photos");

export default useFlags;
