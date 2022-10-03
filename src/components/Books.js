import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBooksAsync } from '../features/books/booksSlice';
import { AddBookCard } from './AddBookCard';

import { BookCard } from './BookCard'

export const Books = ({ byUser=false }) => {

  const { user:id } = useParams();
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const [booksByUser, setBooksByUser] = useState([]);

  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, []);
  
  useEffect(() => {
    if(id){
      setBooksByUser( books.filter( book => book.user_id == id) );
    }
  }, [id]);

  


  return (
    <section className='container container--grid fadeIn'>
        {

          (byUser) ? booksByUser.map( (book) => <BookCard key={book.id} book={book} />)
                 : books.map( (book) => <BookCard key={book.id} book={book}/>)
        }
      <AddBookCard />
    </section>
  )
}
