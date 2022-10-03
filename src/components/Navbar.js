import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutAsync } from '../features/authorization/authSlice';

export const Navbar = () => {

  const [nickname, setNickname] = useState("");

  const {user, token} = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    pickNickName();
  }, [])




  const handleLogout = () => {

    dispatch(logoutAsync(token));
  }

  const pickNickName = () => {
    const name = user.name;
    let initials = "";

    if (name.includes(" ")) {
      initials = name.split(" ");
      initials = initials[0].substring(0, 1) + initials[1].substring(0, 1);
      initials = initials.toUpperCase();
    } else {
      initials = name.substring(0, 2).toUpperCase();
    }

    setNickname(initials);
  }

  return (
    <nav className='navbar'>
      <div className="navbar__header">

        <h1 className="navbar__logo">
          <Link to='/books'>Library-App</Link>
        </h1>
        <div className="navbar__user_menu" tabIndex="0">{nickname}</div>
        <span className="navbar__user_menu__logout" tabIndex="0" onClick={handleLogout}>Logout</span>
      </div>
      <hr color="#A6ABB6" />
      <ul className="menu">
        <li className='menu__items'><Link to='/books'>All books</Link></li>
        <li className='menu__items'><Link to={`${user.id}/books`}>Your Books</Link></li>
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
