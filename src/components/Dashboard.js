import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Dashboard = ({ isLoggedIn, setIsLoggedIn }) => {

  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    
    if(!user.isLoggedIn){
      navigate("/auth");
    } else {
      navigate("/books");
    }

  }, [user]);
  

  return (
    <>
      {(user.isLoggedIn) && <Navbar />}

      <Outlet />
    </>
  )
}
