import React from "react";
import {
  Container,
  Flex,
  Box,
  Button,
  Text,
  List,
  ListItem
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  handleLogin: () => void;
}

const index: React.FC<Props> = ({ handleLogin }) => {
  return (
    <Container maxW="containerXL" p={0}>
      <Flex py={7} px={8} justifyContent="space-between" alignItems="center">
        <Link to="/#">
          <Flex fontWeight="700" fontSize="24px" color="#A6B1E1">
            <Box mr={3}>
              <i className="fab fa-spotify"></i>
            </Box>
            <Text>SPOTIFY</Text>
          </Flex>
        </Link>
        <Box>
          <List fontFamily="Nunito, sans-serif">
            <Flex alignItems="center">
              <ListItem mx={10}>
                <Button
                  size="md"
                  variant="link"
                  color="#A6B1E1"
                  fontWeight="800"
                >
                  Premium
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  size="md"
                  variant="link"
                  color="#A6B1E1"
                  fontWeight="800"
                >
                  About
                </Button>
              </ListItem>
              <ListItem mx={10}>
                <Button
                  size="md"
                  variant="link"
                  color="#A6B1E1"
                  fontWeight="800"
                >
                  Support
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  size="md"
                  variant="solid"
                  borderRadius="full"
                  color="white"
                  py={5}
                  background="#A6B1E1"
                  onClick={handleLogin}
                  _hover={{ opacity: 0.8 }}
                >
                  <i className="fab fa-spotify"></i>
                  <Text ml={2} fontWeight="700">
                    Login with Spotify
                  </Text>
                </Button>
              </ListItem>
            </Flex>
          </List>
        </Box>
      </Flex>
    </Container>
  );
};

export default index;
