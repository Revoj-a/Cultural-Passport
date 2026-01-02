import useData from "./useData";

interface Photo {
  id: number;
  url: string;
  src?: { medium: string };
}

const useFlags = () => useData<Photo>("/search?query=Flags&per_page=10");

export default useFlags;
