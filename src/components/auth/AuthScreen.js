import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthScreen = ({ isLoggedIn, setIsLoggedIn }) => {

  const navigate = useNavigate();

  const handleLogin = ()=>{
    setIsLoggedIn(true);
    // localStorage.setItem("isLoggedIn",true);
    navigate("/books");
  }
  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}
