import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
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
  );
};

export default SearchInput;
