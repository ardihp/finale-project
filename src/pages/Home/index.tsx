import React, { useState, useEffect } from "react";
import { Container, Box, Grid, Flex, Text } from "@chakra-ui/react";
import { useTrack } from "../../hooks/useTrack";
import { useAuth } from "../../hooks/useAuth";

import Navbar from "../../components/authNavbar";
import Greetings from "../../components/Greetings";
import BoxTrack from "../../components/boxTrack";
import HorizontalTrack from "../../components/horizontalTrack";

const Index: React.FC = () => {
  const [Recently, setRecently] = useState<SpotifyApi.TrackObjectFull[]>([]);
  const { getRecently, newRelease } = useTrack();
  const { token } = useAuth();
  let number = 1;

  useEffect(() => {
    getRecently(token).then(res => setRecently(res.items));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Container maxW="container.xl" p={0} m={0}>
      <Box position="sticky" top="0" background="#FDFCFF" zIndex="10">
        <Navbar comp={<Greetings />} />
      </Box>
      <Grid templateColumns="1fr" px={5} py={3} rowGap={5}>
        <BoxTrack data={newRelease} boxHeader="New Release" />
        <Flex
          border="2px solid #F4EEFF"
          borderRadius="lg"
          direction="column"
          px={4} pt={4} pb={0}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontFamily="Spartan" fontWeight="700">
              Recently Played
            </Text>
          </Flex>
          <Grid templateAreas="1fr">
            <Box>
              {Recently.map((r: any, index: number) => (
                <HorizontalTrack
                  key={index}
                  data={r}
                  select={false}
                  header="recent"
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
