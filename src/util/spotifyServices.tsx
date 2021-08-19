export const filterData = (data: any, TrackSelected: SpotifyApi.TrackObjectFull[]) => {
  const tracks: SpotifyApi.TrackObjectFull[] = [...TrackSelected.map((T: SpotifyApi.TrackObjectFull) => Object.assign({}, T)), ...data];
  const filter = [...new Map(tracks.map((t) => [t.uri, t])).values()];
  return filter;
};

export const createPlaylist = async (e: any, User: any, Token: string, TrackSelected: SpotifyApi.TrackObjectFull[]) => {
  const uri = TrackSelected.map((T: SpotifyApi.TrackObjectFull) => T.uri);
  const url = `https://api.spotify.com/v1/users/${User.id}/playlists`;
  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + Token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: e.target[0].value,
      public: false,
      collaborative: false,
      description: e.target[1].value
    })
  })
    .then(res => res.json())
    .then(data => storeTracks(data.id, uri, Token));
};

const storeTracks = async (data: SpotifyApi.TrackObjectFull, uri: string[], Token: string) => {
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
    .then(res => res.json())
    .then(data => console.log(data));
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

export const getPlaylistUser = async (Token: string) => {
  const url = `https://api.spotify.com/v1/me/playlists?offset=6&limit=20`;
  const data = await fetch(url, {
    headers: {
      Authorization: "Bearer " + Token
    }
  }).then(res => res.json());
  return data;
}