import tradition from "../data/tradition";

export interface Photo {
  id: number;
  url: string;
  src?: { large: string };
}

const useTraditions = () => ({
  data: tradition,
  isLoading: false,
  error: null,
});

export default useTraditions;
