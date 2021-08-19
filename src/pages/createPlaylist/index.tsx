import React from "react";
import { Container } from "@chakra-ui/react";

import Navbar from "../../components/authNavbar";
import Search from "../../components/Search";

const index = () => {
  return (
    <Container maxW="container.2xl" p={0}>
      <Navbar comp={<Search />} />
    </Container>
  );
};

export default index;
