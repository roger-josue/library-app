import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const formSchemaRegister = Yup.object().shape({
    name: Yup.string().min(3).max(100).required("This field is required"),
    email: Yup.string().email().required("This field is required"),
    password: Yup.string().min(6).required("This field is required"),
    password_confirmation: Yup.string().min(6, "Confirm password must be at least 6 characters").oneOf([Yup.ref('password'), null], 'Passwords must match').required("This field is required")
  });

  const initialValuesRegister = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  }

export const RegisterFormik = ({ handleSubmit , setAuthType}) => {
  return (
    <div className='container container--full-vh container--gradient'>
    <Formik
      initialValues={initialValuesRegister}
      validationSchema={formSchemaRegister}
      enableReinitialize
      onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
    >
      {({ isSubmitting }) => (
        <Form className='auth_form fadeIn'>
          <h1 className='auth_form__title'>Sign Up</h1>
          {/* <i className="auth_form__icon fa-solid fa-user-plus"></i> */}
          <i className="auth_form__icon fa-solid fa-user"></i>
          {/* <i className="auth_form__icon fa-solid fa-right-to-bracket"></i> */}

          <Field className="auth_form__field" type="text" name="name" placeholder="Name" />
          <ErrorMessage className='auth_form__field--error' name="name" component="div" />

          <Field id="emailRegister" className="auth_form__field" type="email" name="email" placeholder="Email" />
          <ErrorMessage className='auth_form__field--error' name="email" component="div" />

          <Field id="passwordRegister" className="auth_form__field" type="password" name="password" placeholder="Password" />
          <ErrorMessage className='auth_form__field--error' name="password" component="div" />

          <Field className="auth_form__field" type="password" name="password_confirmation" placeholder="Confirm password" />
          <ErrorMessage className='auth_form__field--error' name="password_confirmation" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
          <span tabIndex="0" className='auth_form__link' onClick={()=>setAuthType("login")}>Already registered? Login</span>
        </Form>
      )}
    </Formik>
  </div>
  )
}
