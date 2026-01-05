import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
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
        <InputGroup width="100%">
          <InputLeftElement
            pointerEvents="none"
            children={
              <Box display="flex" alignItems="center" justifyContent="center">
                <BsSearch />
              </Box>
            }
          ></InputLeftElement>
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search for a phrases or category"
            variant="filled"
            width="100%"
            height="35px"
            _placeholder={{ color: "white", fontWeight: "bold" }}
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchBar;
