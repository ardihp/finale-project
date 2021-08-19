import React, { useState, useEffect } from "react";
import { Image, Text, Skeleton, Flex, Button } from "@chakra-ui/react";

interface Props {
  images: string;
  name: string;
  artist_name: SpotifyApi.ArtistObjectSimplified[];
  uri: string;
}

const Index: React.FC<Props> = ({ images, artist_name, name, uri }) => {
  const [isLoading, setLoading] = useState(true);
  const artist = artist_name.map((a: any) => (
    <Flex key={a.id} mr={2}>
      {a.name}
    </Flex>
  ));

  useEffect(() => {
    if (images !== "") {
      setLoading(false);
    }
  }, [images]);

  return (
    <>
      <Skeleton isLoaded={!isLoading} mb={4} height="130px">
        <Image boxSize="130px" borderRadius="lg" boxShadow="md" src={images} />
        <Button
          textAlign="center"
          color="#A6B1E1"
          fontSize="12px"
          p={0}
          size="sm"
          background="#F4EEFF"
          height="35px"
          width="35px"
          borderRadius="lg"
          position="relative"
          top="-45px"
          left="85px"
          onClick={() => window.open(uri, "_blank")}
        >
          <Flex justifyContent="center" alignItems="center">
            <i className="fas fa-play"></i>
          </Flex>
        </Button>
      </Skeleton>
      <Skeleton isLoaded={!isLoading}>
        <Text
          fontFamily="Spartan"
          fontWeight="800"
          fontSize="14px"
          color="#424874"
          width="130px"
          title="Title"
          isTruncated
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
          width="130px"
          title="Artists"
          isTruncated
        >
          <Flex>{artist}</Flex>
        </Text>
      </Skeleton>
    </>
  );
};

export default Index;
