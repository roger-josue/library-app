import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createBookAsync } from '../features/books/booksSlice';
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
  const navigate = useNavigate();
  const {user,token} = useSelector(state => state.auth.user);
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const [book, setBook] = useState(initialValues);

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
    } else {
      setBook(initialValues);
    }
    
  }, [formType]);
  

  const handleSubmit = (values,setSubmitting)=>{
    setSubmitting(true);
    if(formType === "Create"){
      dispatch( createBookAsync({values,token}) );
    }
    setSubmitting(false);
    navigate(`/${user.id}/books`); //might change this for a form reset
    
  }

  return (
    <div className='container fadeIn'>
      <h1>{formType} Book</h1>
      {
        (formType === "Edit") ? <FormikForm initialValues={{...book}} handleSubmit={handleSubmit} formType={formType}/>
                              : <FormikForm initialValues={initialValues} handleSubmit={handleSubmit} formType={formType}/>
      }
    </div>
  )
}
