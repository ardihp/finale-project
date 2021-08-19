import React from "react";
import { Flex, Grid, Button, Text } from "@chakra-ui/react";
import VerticalTrack from "../verticalTrack";

interface Props {
  data?: SpotifyApi.TrackObjectFull[];
  boxHeader: string;
}

const Index: React.FC<Props> = ({ data, boxHeader }) => {
  return (
    <Flex border="2px solid #F4EEFF" borderRadius="lg" direction="column" p={4}>
      <Flex mb={3} justifyContent="space-between" alignItems="center">
        <Text fontFamily="Spartan" fontWeight="700">
          {boxHeader}
        </Text>
        <Button
          fontFamily="Spartan"
          fontSize="12px"
          fontWeight="700"
          variant="link"
        >
          See all
        </Button>
      </Flex>
      <Grid
        templateColumns={{
          xl: "repeat(6, 1fr)",
          lg: "repeat(5, 1fr)",
          md: "repeat(4, 1fr)",
          base: "repeat(3, 1fr)"
        }}
        columnGap={3}
      >
        {data &&
          data.map((r: any) => (
            <VerticalTrack key={r.id} data={r} header={boxHeader} />
          ))}
      </Grid>
    </Flex>
  );
};

export default Index;
