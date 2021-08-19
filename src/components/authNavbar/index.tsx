import React from "react";
import { Container, Flex, Image, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../store/hooks";

interface Props {
  comp?: React.ReactElement;
}

const Index: React.FC<Props> = ({ comp }) => {
  const User = useAppSelector(state => state.auth.user);
  const { display_name, images } = User || {};

  return (
    <Container maxW="container.2xl" p={0} zIndex="10">
      <Flex justifyContent="space-between" p={5} alignItems="center">
        <Flex>{comp}</Flex>
        <Flex background="#424874" borderRadius="full" p={2}>
          {User ? (
            <Flex justifyContent="center" alignItems="center">
              <Image
                boxSize="25px"
                borderRadius="full"
                mr={2}
                src={images && images[0].url}
                alt={display_name}
              />
              <Text
                color="white"
                fontFamily="Poppins"
                fontSize="14px"
                fontWeight="700"
              >
                {display_name}
              </Text>
            </Flex>
          ) : (
            <Text color="white">Loading..</Text>
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
