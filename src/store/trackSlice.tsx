import { createSlice } from "@reduxjs/toolkit";

interface type {
  track: SpotifyApi.TrackObjectFull[];
  selected: SpotifyApi.TrackObjectFull[];
  liked?: SpotifyApi.SavedTrackObject[];
  newRelease?: SpotifyApi.TrackObjectFull[];
}

const initialState: type = {
  track: [],
  selected: [],
  liked: undefined,
  newRelease: undefined
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    storeTrack: (state, action) => {
      state.track = action.payload;
    },
    selectTrack: (state, action) => {
      state.selected = action.payload;
    },
    deselectTrack: (state, action) => {
      state.selected = action.payload;
    },
    storeLiked: (state, action) => {
      state.liked = action.payload;
    },
    storeRelease: (state, action) => {
      state.newRelease = action.payload;
    }
  }
});

export const {
  storeTrack,
  storeLiked,
  selectTrack,
  deselectTrack,
  storeRelease
} = trackSlice.actions;
export default trackSlice.reducer;
