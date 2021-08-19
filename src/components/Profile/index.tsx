import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";

interface Props {
  name?: string;
  images?: string;
}

const Index: React.FC<Props> = ({ name, images }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Image
        boxSize="25px"
        borderRadius="full"
        mr={2}
        src={images}
        alt={name}
        data-testid="profile_image"
      />
      <Text
        color="white"
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="700"
        data-testid="profile_name"
      >
        {name}
      </Text>
    </Flex>
  );
};

export default Index;
