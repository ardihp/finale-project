import React, { useState, useEffect } from "react";
import { Grid, Flex, Text, Button, Skeleton } from "@chakra-ui/react";
import { useTrack } from "../../hooks/useTrack";
import { selectTrack, deselectTrack } from "../../store/trackSlice";
import { useAppDispatch } from "../../store/hooks";

import Track from "./track";

interface Props {
  data: any;
  no: number;
  select: boolean;
  header: string;
}

const Index: React.FC<Props> = ({ data, no, select, header }) => {
  const [isLoading, setLoading] = useState(true);
  const { selected } = useTrack();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const handleSelect = (data: any) => {
    dispatch(selectTrack([data, ...selected]));
  };

  const handleDeselect = (data: any) => {
    dispatch(
      deselectTrack(
        selected.filter((s: SpotifyApi.TrackObjectFull) => s.uri !== data.uri)
      )
    );
  };

  return (
    <Skeleton isLoaded={!isLoading}>
      <Grid
        templateColumns="6% 86% 8%"
        border="2px solid #F4EEFF"
        borderRadius="lg"
        p={2}
        my={4}
        alignItems="center"
        _hover={{ background: "#FAF8FF" }}
      >
        <Flex alignItems="center" justifyContent="center" mr={3}>
          <Text fontFamily="Poppins" fontWeight="700" color="#424874">
            {no < 10 ? "0" + no : no}
          </Text>
        </Flex>
        <Flex>
          {header === "liked" && (
            <Track
              images={data.track.album.images[0].url}
              name={data.track.album.name}
              artist_name={data.track.artists}
            />
          )}
          {header === "recent" && (
            <Track
              images={data.track.album.images[0].url}
              name={data.track.album.name}
              artist_name={data.track.artists}
            />
          )}
          {header === "search" && (
            <Track
              images={data.album.images[0].url}
              name={data.name}
              artist_name={data.artists}
            />
          )}
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          {select === false && (
            <Button
              textAlign="center"
              color="#A6B1E1"
              fontSize="12px"
              fontWeight="600"
              py={2}
              px={3}
              fontFamily="Poppins"
              size="sm"
              background="#F4EEFF"
              onClick={() =>
                window.open(
                  header === "search"
                    ? data.external_urls.spotify
                    : data.track.external_urls.spotify,
                  "_blank"
                )
              }
            >
              Play
            </Button>
          )}
          {select === true &&
            (selected.find(
              (s: SpotifyApi.TrackObjectFull) => s.uri === data.uri
            ) ? (
              <Button
                textAlign="center"
                color="#A6B1E1"
                fontSize="12px"
                fontWeight="600"
                py={2}
                px={3}
                fontFamily="Poppins"
                size="sm"
                background="#F4EEFF"
                onClick={() => handleDeselect(data)}
              >
                Deselect
              </Button>
            ) : (
              <Button
                textAlign="center"
                color="#A6B1E1"
                fontSize="12px"
                fontWeight="600"
                py={2}
                px={3}
                fontFamily="Poppins"
                size="sm"
                background="#F4EEFF"
                onClick={() => handleSelect(data)}
              >
                Select
              </Button>
            ))}
        </Flex>
      </Grid>
    </Skeleton>
  );
};

export default Index;
