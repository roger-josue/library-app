import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { BookCard } from './BookCard'

export const SearchScreen = () => {

  const books = useSelector((state) => state.books.books);

  const [booksBySearch, setbooksBySearch] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    if(searchParams.get("search")){
        setbooksBySearch( books.filter( book => book.title.includes( searchParams.get("search")) ));
    } else {
        setbooksBySearch(books);
    }
  }, [searchParams]);

  


  return (
    <section className='container container--grid fadeIn'>
        {
            booksBySearch.map( (book) => <BookCard key={book.id} book={book}/>)
        }
    </section>
  )
}
