import React, { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard';

import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import { Books } from './components/Books';
import { Book } from './components/Book';
import { AuthScreen } from './components/auth/AuthScreen';
import { BookForm } from './components/BookForm';
import { useDispatch } from 'react-redux';
import { loginFromLocalStorage } from './features/authorization/authSlice';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginFromLocalStorage());
  }, []);
  
  
  
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Dashboard />,
        errorElement: <Navigate to="/books" replace={true} />,
        children: [
          {
            path: "auth",
            element: <AuthScreen />,
          },
          {
            path: "/books",
            element: <Books />,
          },
          {
            path: ":user/books",
            element: <Books byUser={true}/>,
          },
          {
            path: "add",
            element: <BookForm />,
          },
          {
            path: "edit/:id",
            element: <BookForm formType='Edit'/>,
          },
          {
            path: "book/:id",
            element: <Book />,
          },
        ],
      },
    ]
  );

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
