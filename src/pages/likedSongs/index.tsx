import { useEffect } from "react";
import { Container, Box, Flex, Image, Text, Grid } from "@chakra-ui/react";
import { useTrack } from "../../hooks/useTrack";
import { useAuth } from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

import Navbar from "../../components/authNavbar";
import HorizontalTrack from "../../components/horizontalTrack";

const Index = () => {
  const { user } = useAuth();
  const { liked } = useTrack();
  const { display_name } = user || {};
  let number = 1;

  useEffect(() => {
    if (liked && liked.length <= 0) {
      toast.error("Failed to load liked song data!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container p={0} m={0} maxW="container.xl">
      <Box backgroundImage="linear-gradient(#FAF8FF, white)" height="350" />
      <Box mt="-350px">
        <Navbar />
        <Box pl={5} pb={5} boxShadow="md">
          <Flex align="flex-end">
            <Image
              boxSize="250px"
              boxShadow="lg"
              src="https://media1.popsugar-assets.com/files/thumbor/cVRkLQKhohpOsar3ZQECWvvO-UI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/09/23/919/n/1922507/69627564b15b793f_eberhard-grossgasteiger-J9NDmBVhN04-unsplash/i/Pastel-Sky-iPhone-Wallpaper.jpg"
              alt="img random"
            />
            <Flex
              px={5}
              align="flex-start"
              direction="column"
              fontFamily="Spartan"
            >
              <Text fontSize="sm" fontWeight="800" color="#424874">
                PLAYLIST
              </Text>
              <Text fontSize="7xl" fontWeight="800" color="#424874">
                Liked Songs
              </Text>
              <Flex justify="center" align="center" fontFamily="Poppins">
                <Text
                  fontSize="16"
                  fontWeight="700"
                  color="#424874"
                  ml="2"
                  pr="2"
                  borderRight="2px solid #EDEAF5"
                >
                  {display_name}
                </Text>
                <Text fontSize="16" fontWeight="700" color="#6C6F77" ml="2">
                  {liked && liked.length} songs
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Grid
          overflow="hidden"
          height="44vh"
          position="relative"
          templateColumns="1fr"
        >
          <Box overflow="auto" px={5} py={2}>
            {liked &&
              liked.map((l: SpotifyApi.SavedTrackObject, index: number) => (
                <HorizontalTrack key={index} data={l} no={number++} select={false} header="liked" />
              ))}
          </Box>
        </Grid>
      </Box>
      <Toaster position="top-center" />
    </Container>
  );
};

export default Index;
