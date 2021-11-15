import React from 'react';
import {getImageUrl} from "../../../utils/getImageUrl";
import {Box} from "@mui/material";
import {useSelector} from "react-redux";

const AccountInfo = () => {
  const {currentUser} = useSelector(state => state.user);

  return (
    <Box className="account">
      <img
        className="account__image"
        src={currentUser.hasOwnProperty('avatar') ? getImageUrl(currentUser.avatar.tmdb.avatar_path) : null} alt=""
      />
      <Box className="account__info">
        {currentUser.name ? <p><span>Name:</span> {currentUser.name}</p> : null}
        {currentUser.username ? <p><span>Username:</span> {currentUser.username}</p> : null}
      </Box>
    </Box>
  );
};

export default AccountInfo;
