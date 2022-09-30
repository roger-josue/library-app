import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { BookCard } from './BookCard'

export const Books = ({ books }) => {

  const { user } = useParams();
  let booksByUser=[];

  useEffect(() => {
    
    if(user){
      console.log(user)
      booksByUser = books.filter( book => book.user_id === user);
      console.log(booksByUser);
    }
  }, [user])
  
  

  // const [books, setBooks] = useState([
  //   { 
  //     id: 1,
  //     user_id: 1,
  //     title: "Book 1",
  //     description: "description book 1",
  //     website_url: "",
  //     image_url: "https://kbimages1-a.akamaihd.net/47047012-399c-4ae3-aade-cd4c2a10e8e7/1200/1200/False/the-fellowship-of-the-ring-the-lord-of-the-rings-book-1-1.jpg",
  //     year_published: 1959,
  //     available : 1
  //   },
  //   { 
  //     id: 2,
  //     user_id: 1,
  //     title: "Book 2",
  //     description: "description book 2",
  //     website_url: "",
  //     image_url: "",
  //     year_published: 1975,
  //     available : 0
  //   },
  //   { 
  //     id: 3,
  //     user_id: 1,
  //     title: "Book 3",
  //     description: "description book 3",
  //     website_url: "",
  //     image_url: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9780261103252&w=&h=310",
  //     year_published: 1989,
  //     available : 0
  //   },
  //   { 
  //     id: 4,
  //     user_id: 2,
  //     title: "Book 4",
  //     description: "description book 4",
  //     website_url: "",
  //     image_url: "",
  //     year_published: 2000,
  //     available : 1
  //   },
  //   { 
  //     id: 5,
  //     user_id: 2,
  //     title: "Book 5",
  //     description: "description book 5",
  //     website_url: "",
  //     image_url: "",
  //     year_published: 2010,
  //     available : 0
  //   },
  //   { 
  //     id: 6,
  //     user_id: 2,
  //     title: "Book 6",
  //     description: "description book 6",
  //     website_url: "",
  //     image_url: "",
  //     year_published: 2015,
  //     available : 1
  //   },
  // ]);

  return (
    <section className='container container--grid'>
        {
          // (booksByUser) ? booksByUser.map( (book) => <BookCard key={book.id} book={book}/>)
          //        : books.map( (book) => <BookCard key={book.id} book={book}/>)
          books.map( (book) => <BookCard key={book.id} book={book}/>)
        }
    </section>
  )
}
