import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FormikForm } from './FormikForm';

export const BookForm = ({ formType="Create"}) => {

  let initialValues = { 
    title: "",
    description: "",
    url: "",
    image_url: "",
    year_published: "",
    available : ""
  };
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const [book, setBook] = useState({ 
    title: "",
    description: "",
    url: "",
    image_url: "",
    year_published: "",
    available : ""
  });

  const removeKeys = () => {
    setBook(current => {
      const {created_at, updated_at, id, user_id, ...rest} = current;
      return rest;
    });
  };

  

  useEffect(() => {
    if(formType === "Edit"){
      setBook( books.find(book => book.id == id) );
      removeKeys();
    }
    
  }, []);
  

  const handleSubmit = (values,setSubmitting)=>{
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return (
    <div className='container'>
      <h1>{formType} Book</h1>
      {
        (formType === "Edit") ? <FormikForm initialValues={{...book}} handleSubmit={handleSubmit} formType={formType}/>
                              : <FormikForm initialValues={initialValues} handleSubmit={handleSubmit} formType={formType}/>
      }
    </div>
  )
}
