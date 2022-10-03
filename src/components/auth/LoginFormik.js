import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchemaLogin = Yup.object().shape({
    email: Yup.string().email().required("This field is required"),
    password: Yup.string().min(6).required("This field is required")
  });
  
  
  
  const initialValuesLogin = {
    email: "",
    password: ""
  }
  

export const LoginFormik = ({ handleSubmit, setAuthType }) => {
  return (
    <div className='container container--full-vh container--gradient'>
        <Formik
          initialValues={initialValuesLogin}
          validationSchema={formSchemaLogin}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
        >
          {({ isSubmitting }) => (
            <Form className='auth_form fadeIn'>
              <h1 className='auth_form__title'>Sign In</h1>
              {/* <i className="auth_form__icon fa-solid fa-user-plus"></i> */}
              <i className="auth_form__icon fa-solid fa-user"></i>
              {/* <i className="auth_form__icon fa-solid fa-right-to-bracket"></i> */}

              <Field className="auth_form__field" type="email" name="email" placeholder="Email" />
              <ErrorMessage className='auth_form__field--error' name="email" component="div" />

              <Field className="auth_form__field" type="password" name="password" placeholder="Password" />
              <ErrorMessage className='auth_form__field--error' name="password" component="div" />

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
