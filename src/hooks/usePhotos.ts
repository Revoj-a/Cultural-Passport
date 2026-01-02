import useData from "./useData";

interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  src?: { large: string };
}

const usePhotos = () => useData<Photo>("/search?query=Culture&per_page=1");

export default usePhotos;
