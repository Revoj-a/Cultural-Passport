import useData from "./useData";

export interface Photo {
  id: number;
  url: string;
  src?: { large: string };
}

const useTraditions = () =>
  useData<Photo>("/search?query=Traditions&per_page=20");

export default useTraditions;
