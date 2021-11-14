import React from 'react';
import {Box, Container} from "@mui/material";
import {useSelector} from "react-redux";
import {getImageUrl} from "../utils/getImageUrl";

const Account = () => {
  const {currentUser} = useSelector(state => state.user);

  return (
    <Container>
      <Box className="account">
        <img className="account__image" src={getImageUrl(currentUser.avatar.tmdb.avatar_path)} alt=""/>
        <Box className="account__info">
          <p><span>Name:</span> {currentUser.name}</p>
          <p><span>Username:</span> {currentUser.username}</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Account;
