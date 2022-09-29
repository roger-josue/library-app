import React from 'react';
import placeholder from '../assets/book-placeholder.jpeg';

export const BookCard = () => {
  return (
    <figure className='card'>
        <img className='card__image' src={placeholder} alt="a book cover" width="100px"/>
        <figcaption className='card__description'>Book 1</figcaption>
    </figure>
  )
}
