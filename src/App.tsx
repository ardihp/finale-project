import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { useAuth } from "./hooks/useAuth";
import { Toaster } from "react-hot-toast";

import Landing from "./pages/Landing/";
import Auth from "./pages/Auth";

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Container maxW="container.2xl" p={0} background="#FDFCFF" m={0}>
      <Router>
        <Switch>
          <Route path="/home">
            {isAuthenticated ? <Auth /> : <Redirect to="/" />}
          </Route>
          <Route path="/discover">
            {isAuthenticated ? <Auth /> : <Redirect to="/" />}
          </Route>
          <Route path="/create-playlist">
            {isAuthenticated ? <Auth /> : <Redirect to="/" />}
          </Route>
          <Route path="/liked-songs">
            {isAuthenticated ? <Auth /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
      <Toaster position="bottom-right" />
    </Container>
  );
};

export default App;
