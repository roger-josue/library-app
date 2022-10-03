import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { logoutAsync } from '../features/authorization/authSlice';

export const Navbar = () => {

  const [nickname, setNickname] = useState("");

  const { user, token } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const inputSearch = useRef(null);

  useEffect(() => {
    pickNickName();
  }, [])



  const handleSearch = (e) => {
    setSearchParams({search: e.target.value});
  }
  
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setSearchParams({search: e.target.value});
    }
  }

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
        <li className='menu__items'>
          <NavLink to='/books' className={({ isActive }) =>
            isActive ? "menu__items__active" : ""
          }>
            All books
          </NavLink>
        </li>
        <li className='menu__items'>
          <NavLink to={`${user.id}/books`} className={({ isActive }) =>
            isActive ? "menu__items__active" : ""
          }>
            Your Books
            </NavLink>
          </li>
        <li className='menu__items'>
          <NavLink to='/add' className={({ isActive }) =>
            isActive ? "menu__items__active" : ""
          }>
            Add Book
          </NavLink>
        </li>
        <li className='menu__items'>
          <input ref={inputSearch} type="text" className="menu__search" placeholder='Search' onFocus={()=> {navigate("/search")}} onChange={handleSearch} onKeyDown={handleEnter}/>
          <button className="menu__search__btn" onClick={()=> { setSearchParams({ search: inputSearch.current.value})}}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </li>
      </ul>
    </nav>
  )
}
