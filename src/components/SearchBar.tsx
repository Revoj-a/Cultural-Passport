import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useSearchStore from "../store";

const SearchBar = () => {
  const searchQuery = useSearchStore((s) => s.searchQuery);
  const setSearch = useSearchStore((s) => s.setSearch);
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
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
            value={searchQuery}
            onChange={(e) => setSearch(e.target.value)}
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
