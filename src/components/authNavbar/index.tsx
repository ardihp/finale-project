import React from "react";
import { Container, Flex, Text, Button } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";

import Profile from "../Profile";

interface Props {
  comp?: React.ReactElement;
}

const Index: React.FC<Props> = ({ comp }) => {
  const { user, handleLogout } = useAuth();
  const { display_name, images } = user || {};

  return (
    <Container maxW="container.2xl" p={0} zIndex="10">
      <Flex justifyContent="space-between" p={5} alignItems="center">
        <Flex>{comp}</Flex>
        <Flex alignItems="center">
          <Flex background="#424874" borderRadius="full" p={2}>
            {user ? (
              <Profile name={display_name} images={images && images[0].url} />
            ) : (
              <Text color="white">Loading..</Text>
            )}
          </Flex>
          <Button
            alignItems="center"
            justifyContent="center"
            width="40px"
            height="40px"
            borderRadius="full"
            background="#424874"
            color="white"
            ml={2}
            onClick={() => handleLogout()}
            data-testid="logout-button"
          >
            <i className="fas fa-sign-out-alt"></i>
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
