import React, {Fragment, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchSessionIdAsync} from "../thunk";

const Session = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSessionIdAsync());
    history.push('/');

    return () => {
      localStorage.removeItem('request_token');
    };
  }, [dispatch, history]);

  return <Fragment></Fragment>;
};

export default Session;
