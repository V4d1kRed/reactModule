import {fetchAccount, fetchSessionId} from "../apis";
import {setCurrentUser, setLogin} from "../store/reducers/userSlice";

export const fetchSessionIdAndUserAsync = () => {
  return async (dispatch) => {
    try {
      const request_token = localStorage.getItem('request_token');
      const {session_id} = await fetchSessionId(request_token);
      localStorage.setItem('session_id', session_id);

      const currentUser = await fetchAccount(session_id);
      dispatch(setCurrentUser(currentUser));
      dispatch(setLogin());
    } catch (error) {
      console.error(error);
    }
  };
};
