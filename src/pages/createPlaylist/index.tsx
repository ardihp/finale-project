import React, { useState, useEffect } from "react";
import { Container, Box, Grid, Flex, Text, Skeleton } from "@chakra-ui/react";
import { useTrack } from "../../hooks/useTrack";
import { useAppDispatch } from "../../store/hooks";
import { storeTrack, selectTrack } from "../../store/trackSlice";

import Navbar from "../../components/authNavbar";
import HorizontalTrack from "../../components/horizontalTrack";
import Search from "../../components/Search";
import DataDummy from "../../constants/dataDummy";
import Form from "../../components/Form";

const Index = () => {
  const { track } = useTrack();
  const [isLoading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  let number = 1;

  useEffect(() => {
    dispatch(storeTrack(DataDummy));
    dispatch(selectTrack([]));
    if (track) {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxW="container.xl" p={0} m={0}>
      <Box position="sticky" top="0" background="#FDFCFF" zIndex="10">
        <Navbar comp={<Search />} />
      </Box>
      <Grid templateColumns="1fr" px={5} py={3} rowGap={5}>
        <Form />
        <Flex
          border="2px solid #F4EEFF"
          borderRadius="lg"
          direction="column"
          px={4}
          pt={4}
          pb={0}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontFamily="Spartan" fontWeight="700">
              Songs
            </Text>
          </Flex>
          <Grid templateAreas="1fr">
            <Box>
              {track.map((r: any, index: number) => (
                <Skeleton isLoaded={!isLoading} key={index}>
                  <HorizontalTrack
                    data={r}
                    select={true}
                    header="search"
                    no={number++}
                  />
                </Skeleton>
              ))}
            </Box>
          </Grid>
        </Flex>
      </Grid>
    </Container>
  );
};

export default Index;
