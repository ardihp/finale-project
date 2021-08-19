import { Switch, Route } from "react-router-dom";
import { Container, Grid } from "@chakra-ui/react";

import Sidebar from "../components/Sidebar";
import routes from "../constants/Routes";

function Index() {
  return (
    <Container maxW="container.2xl" p={0}>
      <Grid templateColumns="200px 1fr" m={0}>
        <Sidebar />
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route key={index} path={route.path} children={<route.main />} />
          ))}
        </Switch>
      </Grid>
    </Container>
  );
}

export default Index;
