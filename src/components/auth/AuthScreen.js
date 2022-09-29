import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthScreen = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();
  const handleLogin = ()=>{
    setIsLoggedIn(true);
    navigate("/");
  }
  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
    </div>
  )
}
