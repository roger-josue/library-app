import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Books } from './Books'
import { Navbar } from './Navbar'

export const Dashboard = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn){
      navigate("/auth");
    }
  }, [])
  

  return (
    <>
      {(isLoggedIn) && <Navbar />}

      <Outlet />
    </>
  )
}
