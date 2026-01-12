import { create } from "zustand";

interface SearchStore {
  searchQuery: string;
  setSearch: (query: string) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: "",
  setSearch: (query) => set({ searchQuery: query }),
}));

export default useSearchStore;
