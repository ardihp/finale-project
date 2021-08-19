import Home from "../pages/Home";
import LikedSongs from "../pages/likedSongs";
import CreatePlaylist from "../pages/createPlaylist";
import Discover from "../pages/Discover";

const routes = [
  {
    path: "/home",
    main: () => <Home />
  },
  {
    path: "/discover",
    main: () => <Discover />
  },
  {
    path: "/create-playlist",
    main: () => <CreatePlaylist />
  },
  {
    path: "/liked-songs",
    main: () => <LikedSongs />
  }
];

export default routes;
