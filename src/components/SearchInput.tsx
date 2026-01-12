import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useSearchStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearch = useSearchStore((s) => s.setSearch);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            setSearch(ref.current.value);
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
