import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAsync, registerAsync } from '../../features/authorization/authSlice';
import { RegisterFormik } from './RegisterFormik';
import { LoginFormik } from './LoginFormik';


export const AuthScreen = () => {

  const dispatch = useDispatch();

  const [authType, setAuthType] = useState("login")

  const handleLogin = (user) => {
  
    dispatch(loginAsync(user));
  }
  
  const handleRegister = (user) => {
    dispatch(registerAsync(user));
  }
  
  const handleSubmit = (values, setSubmitting) => {
    setSubmitting(true);

    if(authType === "login") {
      handleLogin(values);
    } else {
      handleRegister(values);
    }
    setSubmitting(false);
  }

    return (
      (authType === "register") ? <RegisterFormik handleSubmit={handleSubmit} setAuthType={setAuthType}/>
                                : <LoginFormik handleSubmit={handleSubmit} setAuthType={setAuthType}/>
    )
}
