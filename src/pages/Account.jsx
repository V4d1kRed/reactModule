import React, {useEffect} from 'react';
import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import Progress from "../components/UI/progress/Progress";
import {fetchUserAsync} from "../thunk";
import AccountInfo from "../components/account/accountInfo/accountInfo";

const Account = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.movies);
  const {currentUser} = useSelector(state => state.user);

  useEffect(() => {
    if (!Object.keys(currentUser).length) {
      dispatch(fetchUserAsync());
    }
  }, [dispatch, currentUser]);

  return (
    <Container>
      {
        loading
          ? <Progress/>
          : <AccountInfo/>
      }
    </Container>
  );
};

export default Account;
