import React, { useState, useEffect } from "react";
import { Container, Box, Grid, Flex, Text } from "@chakra-ui/react";
import { useTrack } from "../../hooks/useTrack";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "../../store/hooks";
import { storeTrack } from "../../store/trackSlice";

import Navbar from "../../components/authNavbar";
import BoxTrack from "../../components/boxTrack";
import HorizontalTrack from "../../components/horizontalTrack";
import Search from "../../components/Search";
import DataDummy from "../../constants/dataDummy";

const Index: React.FC = () => {
  const [Recommend, setRecommend] = useState<SpotifyApi.TrackObjectFull[]>([]);
  const { getRecommend, track } = useTrack();
  const { token } = useAuth();
  const dispatch = useAppDispatch();
  let number = 1;

  useEffect(() => {
    getRecommend(token).then(res => setRecommend(res.tracks));
    dispatch(storeTrack(DataDummy));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Container maxW="container.xl" p={0} m={0}>
      <Box position="sticky" top="0" background="#FDFCFF" zIndex="10">
        <Navbar comp={<Search />} />
      </Box>
      <Grid templateColumns="1fr" px={5} py={3} rowGap={5}>
        <BoxTrack data={Recommend} boxHeader="Recommend For You" />
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
                <HorizontalTrack
                  key={index}
                  data={r}
                  select={false}
                  header="search"
                  no={number++}
                />
              ))}
            </Box>
          </Grid>
        </Flex>
      </Grid>
    </Container>
  );
};

export default Index;
