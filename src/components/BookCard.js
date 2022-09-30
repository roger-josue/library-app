import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/book-placeholder.jpeg';

export const BookCard = ({book}) => {
  return (
    <figure className='card'>
        <img className='card__image' src={ (book.image_url) ? book.image_url : placeholder} alt="a book cover"/>
        <figcaption className='card__description'> <Link to={`/book/${book.id}`}>{book.title}</Link> </figcaption>
    </figure>
  )
}
