import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {Box, Button, MenuItem, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {setRegistration} from "../../../store/reducers/userSlice";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object({
  firstName: yup
    .string()
    .required('First name is required field')
    .matches(/^[a-zA-Z.\-_$@*!]{1,15}$/, 'First name should be correct format'),
  secondName: yup
    .string()
    .required('Second name is required field')
    .matches(/^[a-zA-Z.\-_$@*!]{1,15}$/, 'Second name should be correct format'),
  dateOfBirth: yup
    .string()
    .required('Date of birth is required field'),
  gender: yup
    .string()
    .required('Gender is required field'),
  email: yup
    .string()
    .required('Email is required field')
    .email('Email should correct format'),
  password: yup
    .string()
    .required('Password is required field')
    .min(8, 'Password must be at least 8 characters'),
  repeatPassword: yup
    .string()
    .required('Repeat password is required field')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  username: yup
    .string()
    .required('Username is required field')
    .matches(/^[a-z](A-z}0-9}_|.){1,15}$/,
      `Username should be correct format,
      must start with a small letter and include letters,
      numbers or special characters "." and "_"`),
}).required();

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const onSubmit = (data) => {
    dispatch(setRegistration());
    setDateOfBirth(null);
    setGender('');
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 style={{marginBottom: '5px'}}>User registration</h1>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '10px'}}>
        <TextField
          fullWidth
          type="text"
          size="small"
          label="Enter first name"
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <TextField
          fullWidth
          type="text"
          size="small"
          label="Enter second name"
          {...register("secondName")}
          error={!!errors.secondName}
          helperText={errors?.secondName?.message}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            disableFuture
            label="Date of birth"
            value={dateOfBirth}
            onChange={(newValue) => {
              setDateOfBirth(newValue);
            }}
            renderInput={(params) => {
              return <TextField
                fullWidth
                size="small"
                value={params.inputProps.value}
                {...params}
                {...register("dateOfBirth", {value: params.inputProps.value})}
                error={!!errors.dateOfBirth}
                helperText={errors?.dateOfBirth?.message}
              />
            }}
          />
        </LocalizationProvider>
        <TextField
          select
          fullWidth
          label="Gender"
          size="small"
          value={gender}
          {...register("gender")}
          onChange={handleChangeGender}
          error={!!errors.gender}
          helperText={errors?.gender?.message}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>
        <TextField
          fullWidth
          type="email"
          size="small"
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors?.email?.message}
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
        <TextField
          fullWidth
          type="password"
          size="small"
          label="Repeat password"
          {...register("repeatPassword")}
          error={!!errors.repeatPassword}
          helperText={errors?.repeatPassword?.message}
        />
        <TextField
          fullWidth
          type="text"
          size="small"
          label="Username"
          {...register("username")}
          error={!!errors.username}
          helperText={errors?.username?.message}
        />
        <Button variant="contained" color="success" type="submit">
          Sign Up
        </Button>
      </Box>
    </form>
  );
};

export default RegistrationForm;
