import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { BookCard } from './BookCard'

export const Books = ({ books }) => {

  const { user } = useParams();
  const [booksByUser, setBooksByUser] = useState([]);

  useEffect(() => {
    
    if(user){
      setBooksByUser( books.filter( book => book.user_id == user) );
    }
  }, [user])

  return (
    <section className='container container--grid fadeIn'>
        {
          (user) ? booksByUser.map( (book) => <BookCard key={book.id} book={book}/>)
                 : books.map( (book) => <BookCard key={book.id} book={book}/>)
        }
    </section>
  )
}
