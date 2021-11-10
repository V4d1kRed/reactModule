import React from 'react';
import {Container} from "@mui/material";
import {useSelector} from "react-redux";
import RegistrationForm from "../components/forms/registrationForm/RegistrationForm";
import LoginForm from "../components/forms/loginForm/LoginForm";

const Login = () => {
  const {registration} = useSelector(state => state.user);

  return (
    <Container>
      {
        !registration
          ? <LoginForm/>
          : <RegistrationForm/>
      }
    </Container>
  );
};

export default Login;
