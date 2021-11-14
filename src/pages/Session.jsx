import React, {Fragment, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchSessionIdAndUserAsync} from "../thunk";

const Session = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSessionIdAndUserAsync());
    history.push('/movie');

    return () => {
      localStorage.removeItem('request_token');
    };
  }, [dispatch, history]);

  return <Fragment></Fragment>;
};

export default Session;
