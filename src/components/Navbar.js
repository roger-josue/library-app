import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1 className="navbar__logo">
          <Link to='/books'>Library-App</Link>
        </h1>
        <div className="navbar__user_menu">RV</div>
        <hr color="#A6ABB6" />
        <ul className="menu">
          <li className='menu__items'><Link to='/books'>All books</Link></li>
          <li className='menu__items'><Link to='1/books'>Your Books</Link></li>
          <li className='menu__items'><Link to='/add'>Add Book</Link></li>
          <li className='menu__items'>
            <input type="text" className="menu__search" placeholder='Search' />
            <button className="menu__search__btn">
            <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
        </ul>
    </nav>
  )
}
