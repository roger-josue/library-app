import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchemaRegister = Yup.object().shape({
  name: Yup.string().min(3).max(100).required("This field is required"),
  email: Yup.string().email().required("This field is required"),
  password: Yup.string().min(6).required("This field is required"),
  confirm_password: Yup.string().min(6, "Confirm password must be at least 6 characters").oneOf([Yup.ref('password'), null], 'Passwords must match').required("This field is required")
});

const formSchemaLogin = Yup.object().shape({
  email: Yup.string().email().required("This field is required"),
  password: Yup.string().min(6).required("This field is required")
});

const initialValuesRegister = {
  name: "",
  email: "",
  password: "",
  confirm_password: ""
}

const initialValuesLogin = {
  email: "",
  password: ""
}

export const AuthScreen = ({ isLoggedIn, setIsLoggedIn }) => {

  const [authType, setAuthType] = useState("login");

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    // localStorage.setItem("isLoggedIn",true);
    navigate("/books");
  }

  const handleSubmit = (values, setSubmitting) => {
    setSubmitting(true);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    setSubmitting(false);
  }

  if (authType === "register") {
    return (
      <div className='container container--full-vh fadeIn'>
        <Formik
          initialValues={initialValuesRegister}
          validationSchema={formSchemaRegister}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
        >
          {({ isSubmitting }) => (
            <Form className='auth_form fadeIn'>
              <h1 className='auth_form__title fadeIn'>Sign Up</h1>
              {/* <i className="auth_form__icon fa-solid fa-user-plus"></i> */}
              <i className="auth_form__icon fa-solid fa-user fadeIn"></i>
              {/* <i className="auth_form__icon fa-solid fa-right-to-bracket"></i> */}

              <Field className="auth_form__field fadeIn" type="text" name="name" placeholder="Name" />
              <ErrorMessage className='auth_form__field--error fadeIn' name="name" component="div" />

              <Field className="auth_form__field fadeIn" type="email" name="email" placeholder="Email" />
              <ErrorMessage className='auth_form__field--error fadeIn' name="email" component="div" />

              <Field className="auth_form__field fadeIn" type="password" name="password" placeholder="Password" />
              <ErrorMessage className='auth_form__field--error fadeIn' name="password" component="div" />

              <Field className="auth_form__field fadeIn" type="password" name="confirm_password" placeholder="Confirm password" />
              <ErrorMessage className='auth_form__field--error fadeIn' name="confirm_password" component="div" />

              <button type="submit" disabled={isSubmitting}>
                Register
              </button>
              <span tabIndex="0" className='auth_form__link' onClick={()=>setAuthType("login")}>Already registered? Login</span>
            </Form>
          )}
        </Formik>
      </div>
    )
  } else {
    return (
      <div className='container container--full-vh fadeIn'>
        <Formik
          initialValues={initialValuesLogin}
          validationSchema={formSchemaLogin}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
        >
          {({ isSubmitting }) => (
            <Form className='auth_form fadeIn'>
              <h1 className='auth_form__title fadeIn'>Sign In</h1>
              {/* <i className="auth_form__icon fa-solid fa-user-plus"></i> */}
              <i className="auth_form__icon fa-solid fa-user fadeIn"></i>
              {/* <i className="auth_form__icon fa-solid fa-right-to-bracket fadeIn"></i> */}

              <Field className="auth_form__field fadeIn" type="email" name="email" placeholder="Email" />
              <ErrorMessage className='auth_form__field--error fadeIn' name="email" component="div" />

              <Field className="auth_form__field fadeIn" type="password" name="password" placeholder="Password" />
              <ErrorMessage className='auth_form__field--error fadeIn' name="password" component="div" />

              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
              <span tabIndex="0" className='auth_form__link' onClick={()=>setAuthType("register")}>Or Register</span>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}
