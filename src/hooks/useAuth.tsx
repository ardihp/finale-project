import { useAppSelector, useAppDispatch } from "../store/hooks";
import { logout } from "../store/authSlice";

const useAuth = () => {
  const { isAuthenticated, token, user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const getTokenFromUrl = (hash: any) => {
    const stringAfterHastag = hash.substring(1);
    const paramInUrl = stringAfterHastag.split("&");
    const paramSplitUp = paramInUrl.reduce(
      (acc: number[], currentValue: any) => {
        const [key, value] = currentValue.split("=");
        acc[key] = value;
        return acc;
      },
      {}
    );
    return paramSplitUp;
  };

  const handleLogin = () => {
    const Client_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const Response_Type = "token";
    const Redirect_URI = "https://finale-project.vercel.app";
    const Scope = "playlist-modify-private user-library-read user-read-recently-played";
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${Client_ID}&response_type=${Response_Type}&redirect_uri=${Redirect_URI}&scope=${Scope}&show_dialog=false`;
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return { isAuthenticated, token, user, handleLogout, handleLogin, getTokenFromUrl };
};

export { useAuth };
