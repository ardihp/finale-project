import React from "react";
import { Flex } from "@chakra-ui/react";
import Track from "./track";

interface Props {
  data: any;
  header: string;
}

const Index: React.FC<Props> = ({ data, header }) => {
  return (
    <Flex
      key={data.id}
      border="2px solid #F4EEFF"
      borderRadius="lg"
      alignItems="center"
      justifyContent="center"
      _hover={{ background: "#FAF8FF" }}
    >
      <Flex direction="column" p={3}>
        {header === "New Release" && (
          <Track
            images={data.images[0].url}
            name={data.name}
            artist_name={data.artists}
            uri={data.external_urls.spotify}
          />
        )}
        {header === "Recommend For You" && (
          <Track
            images={data.album.images[0].url}
            name={data.name}
            artist_name={data.album.artists}
            uri={data.external_urls.spotify}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default Index;
