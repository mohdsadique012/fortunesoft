import {
  useContext,
  createContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import AllMovie from "../MovieReducer/MovieReducer";
import axios from "axios";

/* API URL */
const ALLMOVIEURL = "https://wookie.codesubmit.io/movies";
const authToken = "Bearer Wookie2019";
const AppContext = createContext();

/* Initial State */
const intialState = {
  is_loading: false,
  is_error: false,
  movies: [],
  genre: {},
  is_single_loading: false,
  is_single_error: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AllMovie, intialState);
  const getMovie = async (url) => {
    dispatch({ type: "IS_LOADING" });
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: authToken,
        },
      });
      const movies = await res.data;
      console.log(movies, "111");
      dispatch({ type: "SET_API_DATA", payload: movies });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getMovie(ALLMOVIEURL);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, getMovie }}>
      {children}
    </AppContext.Provider>
  );
};

const useProfileGlobal = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProfileGlobal };
