import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
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
        <InputGroup width="100%">
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch />}
          ></InputLeftElement>
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Random Country"
            variant="filled"
            width="100%"
            height="40px"
            _placeholder={{ color: "white", fontWeight: "bold" }}
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
