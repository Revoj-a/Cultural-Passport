import SearchBar from "./SearchBar";

interface Props {
  onSearch: (text: string) => void;
}

const PhraseBook = ({ onSearch }: Props) => {
  return <SearchBar onSearch={onSearch} />;
};

export default PhraseBook;
