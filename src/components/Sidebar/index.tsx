import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import SidebarItem from "./Item";

const index = () => {
  return (
    <Flex
      height="100vh"
      position="sticky"
      top="0"
      borderRight="2px solid #F4EEFF"
      direction="column"
      background="#FDFCFF"
      zIndex="10"
    >
      <Flex direction="column">
        <Link to="/home">
          <Flex
            alignItems="center"
            justifyContent="flex-start"
            px={6}
            py={7}
            fontSize="18px"
            fontFamily="spartan"
          >
            <Box fontSize="22px">
              <i className="fab fa-spotify"></i>
            </Box>
            <Text fontWeight="700" ml={2}>
              SPOTIFY
            </Text>
          </Flex>
        </Link>
      </Flex>
      <Flex px={6} direction="column">
        <SidebarItem
          header="menu"
          icon1="fas fa-compact-disc"
          menu1="Home"
          slug1="home"
          icon2="fas fa-compass"
          menu2="Discover"
          slug2="discover"
        />
        <SidebarItem
          header="library"
          icon1="fas fa-plus-square"
          menu1="Create Playlist"
          slug1="create-playlist"
          icon2="fas fa-heart"
          menu2="Liked Songs"
          slug2="liked-songs"
        />
      </Flex>
    </Flex>
  );
};

export default index;
