import React, { useState, useEffect } from "react";
import { Flex, Text, Image, Skeleton } from "@chakra-ui/react";

interface Props {
  images: string;
  name: string;
  artist_name: SpotifyApi.ArtistObjectSimplified[];
}

const Track: React.FC<Props> = ({ images, name, artist_name }) => {
  const [isLoading, setLoading] = useState(true);
  const artist = artist_name.map((a: any) => <span key={a.id}>{a.name}&nbsp;&nbsp;</span>);

  useEffect(() => {
    if (images !== "") {
      setLoading(false);
    }
  }, [images]);

  return (
    <>
      <Skeleton isLoaded={!isLoading}>
        <Image boxSize="55px" borderRadius="lg" src={images} />
      </Skeleton>
      <Flex direction="column" justifyContent="center" mx={3}>
        <Skeleton isLoaded={!isLoading}>
          <Text
            fontFamily="Spartan"
            fontWeight="800"
            fontSize="14px"
            color="#424874"
          >
            {name}
          </Text>
        </Skeleton>
        <Skeleton isLoaded={!isLoading}>
          <Text
            fontFamily="Poppins"
            fontWeight="600"
            fontSize="12px"
            color="#A6B1E1"
          >
            {artist}
          </Text>
        </Skeleton>
      </Flex>
    </>
  );
};

export default Track;
