import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux";
import {setLogin} from "../../../store/reducers/userSlice";
import {useHistory} from "react-router-dom";

const schema = yup.object({
  username: yup
    .string()
    .required('Username is required field')
    .matches(/^[a-z](A-z}0-9}_|.){1,15}$/,
      `Username should be correct format,
      must start with a small letter and include letters,
      numbers or special characters "." and "_"`),
  password: yup
    .string()
    .required('Password is required field')
    .min(8, 'Password must be at least 8 characters'),
}).required();

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state => state.user);
  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    dispatch(setLogin());
    history.push('/movie');
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 style={{marginBottom: '5px'}}>Welcome, {currentUser.username ? currentUser.username : 'user'}😊</h1>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '10px'}}>
        <TextField
          fullWidth
          type="text"
          size="small"
          label="Username"
          {...register("username")}

          error={!!errors.username}
          helperText={errors?.username?.message}
          defaultValue={currentUser.username}
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
