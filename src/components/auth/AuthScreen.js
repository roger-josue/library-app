import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginAsync, registerAsync } from '../../features/authorization/authSlice';
import { RegisterFormik } from './RegisterFormik';
import { LoginFormik } from './LoginFormik';
import Swal from 'sweetalert2';


export const AuthScreen = () => {

  const dispatch = useDispatch();

  const [authType, setAuthType] = useState("login")

  const handleLogin = async(user) => {
    
    try {
      const result = await dispatch(loginAsync(user)).unwrap();

    } catch (err) {
      Swal.fire({
        title: 'There has been an error!',
        text: err.message,
        icon: 'error',
        showConfirmButton: false,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      
    }
  }
  
  const handleRegister = async(user) => {
    try {
      const result = await dispatch(registerAsync(user)).unwrap();

    } catch (err) {
      Swal.fire({
        title: 'There has been an error!',
        text: err.message,
        icon: 'error',
        showConfirmButton: false,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      
    }
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
