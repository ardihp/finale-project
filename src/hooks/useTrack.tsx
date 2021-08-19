import { useAppSelector } from "../store/hooks";

const useTrack = () => {
  const { track, selected, liked, newRelease } = useAppSelector(
    state => state.track
  );

  const getLikedTrack = async (Token: string) => {
    const url = `https://api.spotify.com/v1/me/tracks?market=ES&limit=50`;
    const data = await fetch(url, {
      headers: {
        Authorization: "Bearer " + Token
      }
    }).then(res => res.json());
    return data;
  };

  const getNewReleased = async (Token: string) => {
    const url = `https://api.spotify.com/v1/browse/new-releases?limit=6`;
    const data = await fetch(url, {
      headers: {
        Authorization: "Bearer " + Token
      }
    }).then(res => res.json());
    return data;
  };

  const getRecommend = async (Token: string) => {
    const url = `https://api.spotify.com/v1/recommendations?limit=6&seed_artist=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical&seed_tracks=0c6xIDDpzE81m2q797ordA`;
    const data = await fetch(url, {
      headers: {
        Authorization: "Bearer " + Token
      }
    }).then(res => res.json());
    return data;
  };

  const getRecently = async (Token: string) => {
    const url = `https://api.spotify.com/v1/me/player/recently-played?limit=20`;
    const data = await fetch(url, {
      headers: {
        Authorization: "Bearer " + Token
      }
    }).then(res => res.json());
    return data;
  };

  const getTrackData = async (query: string, Token: string) => {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track&limit=20`;
    if (query) {
      const data = await fetch(url, {
        headers: {
          Authorization: "Bearer " + Token
        }
      }).then(res => res.json());
      return data;
    }
  };

  return {
    track,
    selected,
    liked,
    newRelease,
    getLikedTrack,
    getNewReleased,
    getRecommend,
    getRecently,
    getTrackData
  };
};

export { useTrack };
