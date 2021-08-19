import React from "react";
import { Text, List, Grid, ListItem, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  header: string;
  icon1?: string;
  menu1?: string;
  slug1?: string;
  icon2?: string;
  menu2?: string;
  slug2?: string;
  icon3?: string;
  menu3?: string;
  slug3?: string;
}

const index: React.FC<Props> = ({
  header,
  icon1,
  menu1,
  slug1,
  icon2,
  menu2,
  slug2,
  icon3,
  menu3,
  slug3
}) => {
  return (
    <List mb={10}>
      <Text
        fontSize="11px"
        fontWeight="700"
        letterSpacing="1px"
        fontFamily="spartan"
        mb={4}
        textTransform="uppercase"
        color="#A6B1E1"
      >
        {header}
      </Text>
      <Grid fontFamily="poppins" color="#424874">
        <ListItem mb={5} _hover={{ opacity: 0.7 }}>
          <Link to={"/" + slug1}>
            <Flex alignItems="center" fontSize="20px">
              <i className={icon1}></i>
              <Text ml={2} fontSize="14px" fontWeight="600">
                {menu1}
              </Text>
            </Flex>
          </Link>
        </ListItem>
        <ListItem _hover={{ opacity: 0.7 }}>
          <Link to={"/" + slug2}>
            <Flex alignItems="center" fontSize="20px">
              <i className={icon2}></i>
              <Text ml={2} fontSize="14px" fontWeight="600">
                {menu2}
              </Text>
            </Flex>
          </Link>
        </ListItem>
        <ListItem _hover={{ opacity: 0.7 }}>
          <Link to={"/" + slug3}>
            <Flex alignItems="center" fontSize="20px">
              <i className={icon3}></i>
              <Text ml={2} fontSize="14px" fontWeight="600">
                {menu3}
              </Text>
            </Flex>
          </Link>
        </ListItem>
      </Grid>
    </List>
  );
};

export default index;
