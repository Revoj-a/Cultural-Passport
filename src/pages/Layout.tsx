import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { useState } from "react";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const showNavBar = location.pathname !== "/phrasebook";
  return (
    <Grid
      templateAreas={{
        base: showNavBar ? `"nav" "main"` : `"main"`,
        lg: showNavBar ? `"nav nav" "aside main"` : `"aside main"`,
      }}
      templateColumns={{
        base: " auto 1fr",
        lg: "240px 1fr",
      }}
      bg="black"
      minH="100vh"
    >
      {showNavBar && (
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) => setSearchQuery(searchText)}
          ></NavBar>
        </GridItem>
      )}
      <GridItem area="aside">
        <SideBar />
      </GridItem>
      <GridItem area="main">
        <Outlet context={{ searchQuery, setSearchQuery }} />
      </GridItem>
    </Grid>
  );
};

export default Layout;
