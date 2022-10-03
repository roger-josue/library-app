import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const AddBookCard = () => {
  const navigate = useNavigate();
  return (
    <section className='card fadeIn'>
        <div className='card__add-book' onClick={() => navigate("/add")}>
        <i className="fa-solid fa-plus"></i>
        </div>
        <div className='card__description'> <Link to={"/add"}>Add a new book</Link> </div>
    </section>
  )
}
