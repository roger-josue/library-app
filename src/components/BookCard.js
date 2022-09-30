import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import placeholder from '../assets/book-placeholder.jpeg';

export const BookCard = ({book}) => {
  const navigate = useNavigate();
  return (
    <figure className='card fadeIn'>
        <img className='card__image' src={ (book.image_url) ? book.image_url : placeholder} alt="a book cover" onClick={() => navigate(`/book/${book.id}`)}/>
        <figcaption className='card__description'> <Link to={`/book/${book.id}`}>{book.title}</Link> </figcaption>
    </figure>
  )
}
