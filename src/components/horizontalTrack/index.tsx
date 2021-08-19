import React, { useState, useEffect } from "react";
import { Grid, Flex, Text, Button, Skeleton } from "@chakra-ui/react";

import Track from "./track";

interface Props {
  data: any;
  no: number;
  select: boolean;
  header: string;
}

const Index: React.FC<Props> = ({ data, no, select, header }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <Skeleton isLoaded={!isLoading}>
      <Grid
        templateColumns="6% 90% 4%"
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
        <Flex alignItems="center">
          {select === false && (
            <Button
              textAlign="center"
              color="#A6B1E1"
              fontSize="12px"
              p={0}
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
              <i className="fas fa-play"></i>
            </Button>
          )}
          {select === true && (
            <Button
              textAlign="center"
              color="#A6B1E1"
              fontSize="12px"
              p={0}
              size="sm"
              background="#F4EEFF"
              onClick={() => alert("select")}
            >
              <i className="fas fa-plus"></i>
            </Button>
          )}
        </Flex>
      </Grid>
    </Skeleton>
  );
};

export default Index;
