import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createBookAsync, editBookAsync } from '../features/books/booksSlice';
import { FormikForm } from './FormikForm';
import Swal from 'sweetalert2';

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
  

  const handleSubmit = async(values,setSubmitting, resetForm)=>{
    setSubmitting(true);
    if(formType === "Create"){
      try {
        const result = await dispatch( createBookAsync({values,token}) ).unwrap();
        // handle result here
        Swal.fire({
          title: 'Book created successfully!',
          text: `${result.title} created`,
          icon: 'success',
          showConfirmButton: false,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        
        resetForm({values : initialValues});

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
      setSubmitting(false);
    } else {
      try {
        const result = await dispatch( editBookAsync({id,values,token}) ).unwrap();
        // handle result here
        Swal.fire({
          title: 'Book updated successfully!',
          icon: 'success',
          text: `${result.title} updated`,
          showConfirmButton: false,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        setSubmitting(false);

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
