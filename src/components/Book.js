import React from 'react';
import { Link, useParams } from 'react-router-dom';
import placeholder from '../assets/book-placeholder.jpeg';

export const Book = () => {
  const { id } = useParams();

  const book = { 
    id: 1,
    user_id: 1,
    title: "Book 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nisi tenetur error culpa voluptate harum vel animi nam incidunt ipsum cupiditate ea magnam, illo fugiat eum. Beatae repudiandae dolorem eius numquam libero rem deleniti magnam dolor sit voluptas saepe repellendus dicta, quae adipisci iste autem! Aperiam dolorum natus voluptatibus quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nisi tenetur error culpa voluptate harum vel animi nam incidunt ipsum cupiditate ea magnam, illo fugiat eum. Beatae repudiandae dolorem eius numquam libero rem deleniti magnam dolor sit voluptas saepe repellendus dicta, quae adipisci iste autem! Aperiam dolorum natus voluptatibus quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nisi tenetur error culpa voluptate harum vel animi nam incidunt ipsum cupiditate ea magnam, illo fugiat eum. Beatae repudiandae dolorem eius numquam libero rem deleniti magnam dolor sit voluptas saepe repellendus dicta, quae adipisci iste autem! Aperiam dolorum natus voluptatibus quibusdam.",
    website_url: "https://www.amazon.com/Fellowship-Ring-Being-First-Rings/dp/0547928211/ref=asc_df_0547928211/?tag=hyprod-20&linkCode=df0&hvadid=266182330298&hvpos=&hvnetw=g&hvrand=10439210215797741053&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9053013&hvtargid=pla-455518633806&psc=1",
    image_url: "https://kbimages1-a.akamaihd.net/47047012-399c-4ae3-aade-cd4c2a10e8e7/1200/1200/False/the-fellowship-of-the-ring-the-lord-of-the-rings-book-1-1.jpg",
    year_published: 1959,
    available : 1
  };

  return (
    <div className='container'>
      <div className='book'>
        <h1 className='book__title'>{book.title}</h1>
        <figure className='book__body'>
          <img className='book__body__image' src={ (book.image_url) ? book.image_url : placeholder} alt="a book cover"/>
          <figcaption className='book__body__description'>
            <p>{book.description}</p>
            <p>Year published : {book.year_published}</p>
            <p>Availability: {(book.available === 1) ? 'Available' : 'Not available'}</p>
            <div className='book__body__buttons'>
            <a target="_blank" href={book.website_url} >
            Website <i class="fa-solid fa-up-right-from-square"></i></a>
            <Link to={`/edit/${id}`}>Edit <i class="fa-solid fa-pen-to-square"></i></Link> 
            </div>
          </figcaption>
      </figure>
      </div>
    </div>
  )
}
