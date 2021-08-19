import { createSlice } from "@reduxjs/toolkit";

interface auth {
  isAuthenticated: boolean;
  token: string;
  user?: SpotifyApi.CurrentUsersProfileResponse;
}

const initialState: auth = {
  isAuthenticated: false,
  token: "",
  user: undefined
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    storeUser: (state, action) => {
      state.user = action.payload;
    },
    logout: () => initialState
  }
});

export const { login, storeUser, logout } = authSlice.actions;
export default authSlice.reducer;
