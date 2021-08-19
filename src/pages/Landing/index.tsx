import React, { useEffect } from "react";
import { Grid, Flex, Container, Image, Text, Button } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";
import { useTrack } from "../../hooks/useTrack";
import { useAppDispatch } from "../../store/hooks";
import { login, storeUser } from "../../store/authSlice";
import { useHistory } from "react-router-dom";
import { getCurrentUser } from "../../util/spotifyServices";
import { storeLiked, storeRelease, storeTrack } from "../../store/trackSlice";

import Navbar from "../../components/landingNavbar";
import Style from "./style.module.css";
import DataDummy from "../../constants/dataDummy";

const Index: React.FC = () => {
  const { handleLogin, getTokenFromUrl, isAuthenticated } = useAuth();
  const { getLikedTrack, getNewReleased } = useTrack();
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated && window.location.hash) {
      const token = getTokenFromUrl(window.location.hash);
      if (token) {
        dispatch(login(token.access_token));
        getCurrentUser(token.access_token).then(res =>
          dispatch(storeUser(res))
        );
        getLikedTrack(token.access_token).then(res =>
          dispatch(storeLiked(res.items))
        );
        getNewReleased(token.access_token).then(res =>
          dispatch(storeRelease(res.albums.items))
        );
        dispatch(storeTrack(DataDummy));
        history.push("/home");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxW="container.xl" p={0} height="100vh">
      <Navbar handleLogin={handleLogin} />
      <Grid px={8} templateColumns="1fr 1fr">
        <Flex
          direction="column"
          fontFamily="Nunito, sans-serif"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text
            fontSize="70px"
            fontWeight="900"
            lineHeight="115%"
            color="#A6B1E1"
          >
            You bring the passion, we bring the music.
          </Text>
          <Text
            fontWeight="800"
            color="#424874"
            width="65%"
            mb="30px"
            mt="15px"
          >
            Get playlists and albums inspired by the artists and genres you're
            listening to. 3 months free, then{" "}
            <span className={Style.price}>$9.99 / month.</span>
          </Text>
          <Button
            borderRadius="full"
            px="40px"
            py="30px"
            background="#A6B1E1"
            color="white"
            _hover={{ opacity: 0.8 }}
            onClick={() => handleLogin()}
          >
            <Text fontSize="18px" fontWeight="700" mr={3}>
              Get Started
            </Text>
            <i className="fas fa-angle-double-right"></i>
          </Button>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Image
            src={process.env.PUBLIC_URL + "/images/lagu.png"}
            alt="lagu-3d"
            boxSize="500px"
            className={Style.float}
          />
        </Flex>
      </Grid>
    </Container>
  );
};

export default Index;
