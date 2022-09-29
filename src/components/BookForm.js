import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
 
 const formSchema = Yup.object().shape({
  title: Yup.string().min(2).max(100).required("This field is required"),
  description: Yup.string().min(4).required("This field is required"),
  website_url: Yup.string().nullable().url("This field needs to be a valid url"),
  year_published: Yup.number().required("This field is required"),
  available: Yup.number().required("This field is required"),
 });

export const BookForm = ({ formType="Create"}) => {

  const handleSubmit = (values,setSubmitting)=>{
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return (
    <div className='container'>
      <h1>{formType} Book</h1>
      <Formik
        initialValues={{ 
          title: "",
          description: "",
          website_url: "",
          year_published: "",
          available : ""
        }}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting })=>handleSubmit(values,setSubmitting)}
      >
        {({ isSubmitting }) => (
          <Form className='form'>
            <label className='form__label' htmlFor="title">Title</label>
            <Field className="form__field" type="text" name="title" placeholder="Book title"/>
            <ErrorMessage name="title" component="div" />

            <label className='form__label' htmlFor="description">Description</label>
            <Field className="form__field" as="textarea" name="description" placeholder="Description"/>
            <ErrorMessage name="description" component="div" />

            <label className='form__label' htmlFor="website_url">Website</label>
            <Field className="form__field" type="text" name="website_url" placeholder="Website url"/>
            <ErrorMessage name="website_url" component="div" />

            <label className='form__label' htmlFor="year_published">Year published</label>
            <Field className="form__field" type="number" name="year_published" />
            <ErrorMessage name="year_published" component="div" />

            <label className='form__label' htmlFor="available">Available</label>
            <Field className="form__field" as="select" name="available">
              <option value=""></option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </Field>
            <ErrorMessage name="available" component="div" />
          
            <button type="submit" disabled={isSubmitting}>
              {formType}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
