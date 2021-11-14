import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {fetchRequestToken} from "../../../apis";

const schema = yup.object({
  username: yup
    .string()
    .required('Username is required field'),
  password: yup
    .string()
    .required('Password is required field')
    .min(8, 'Password must be at least 8 characters'),
}).required();

const LoginForm = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const {request_token} = await fetchRequestToken();
    const redirectUrl = `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${process.env.REACT_APP_REDIRECTION_LINK}`;
    window.open(redirectUrl,  'Authentication');
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 style={{marginBottom: '5px'}}>Login</h1>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '10px'}}>
        <TextField
          fullWidth
          type="text"
          size="small"
          label="Username"
          {...register("username")}
          error={!!errors.username}
          helperText={errors?.username?.message}
        />
        <TextField
          fullWidth
          type="password"
          size="small"
          label="Password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <Button variant="contained" color="success" type="submit">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
