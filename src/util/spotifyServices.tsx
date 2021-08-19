export const createPlaylist = async (
  Title: string,
  Desc: string,
  User: SpotifyApi.CurrentUsersProfileResponse | undefined,
  Token: string,
  TrackSelected: SpotifyApi.TrackObjectFull[]
) => {
  const uri = TrackSelected.map((T: SpotifyApi.TrackObjectFull) => T.uri);
  const url = `https://api.spotify.com/v1/users/${User?.id}/playlists`;
  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + Token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: Title,
      public: false,
      collaborative: false,
      description: Desc
    })
  })
    .then(res => res.json())
    .then(data => storeTracks(data.id, uri, Token));
};

const storeTracks = async (
  data: SpotifyApi.TrackObjectFull,
  uri: string[],
  Token: string
) => {
  const url = `https://api.spotify.com/v1/playlists/${data}/tracks?position=0&uris=${uri}`;
  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + Token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      uris: uri,
      position: 0
    })
  })
    .then(res => res.json());
};

export const getCurrentUser = async (Token: string) => {
  const url = `https://api.spotify.com/v1/me`;
  const data = await fetch(url, {
    headers: {
      Authorization: "Bearer " + Token
    }
  }).then(res => res.json());
  return data;
};