import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            onSearch(ref.current.value);
            ref.current.value = "";
          }
        }}
      >
        <InputGroup width="40%">
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch />}
          ></InputLeftElement>
          <Input
            ref={ref}
            borderRadius={15}
            placeholder="Search for a phrase or category"
            variant="filled"
            width="40%"
            height="35px"
            _placeholder={{ color: "white", fontWeight: "bold" }}
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchBar;
