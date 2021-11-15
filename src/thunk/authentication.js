import {fetchAccount, fetchSessionId} from "../apis";
import {setCurrentUser, setLogin} from "../store/reducers/userSlice";
import {toggleLoading} from "../store/reducers/moviesSlice";

export const fetchSessionIdAsync = () => {
  return async (dispatch) => {
    try {
      const request_token = localStorage.getItem('request_token');
      const {session_id} = await fetchSessionId(request_token);
      localStorage.setItem('session_id', session_id);
      dispatch(setLogin());
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchUserAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoading());
      const session_id = localStorage.getItem('session_id');
      const currentUser = await fetchAccount(session_id);
      dispatch(setCurrentUser(currentUser));
      dispatch(toggleLoading());
    } catch (error) {
      console.error(error);
    }
  };
};


