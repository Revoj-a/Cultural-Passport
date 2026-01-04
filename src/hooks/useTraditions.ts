import { useQuery } from "@tanstack/react-query";
import tradition from "../data/tradition";

interface Photo {
  id: number;
  url: string;
  src?: { large: string };
}

const useTraditions = () =>
  useQuery<Photo[], Error>({
    queryKey: ["traditions"],
    queryFn: () => Promise.resolve(tradition),
    staleTime: Infinity,
    initialData: tradition,
  });

export default useTraditions;
