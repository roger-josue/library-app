import React, { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard';

import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import { Books } from './components/Books';
import { Book } from './components/Book';
import { AuthScreen } from './components/auth/AuthScreen';
import { BookForm } from './components/BookForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksAsync } from './features/books/booksSlice';
import { loginFromLocalStorage } from './features/authorization/authSlice';


function App() {
  const booksState = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginFromLocalStorage());
    dispatch(fetchBooksAsync());
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
            element: <Books books={booksState}/>,
          },
          {
            path: ":user/books",
            element: <Books books={booksState}/>,
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

    // createRoutesFromElements(
    //   <Route path="/" element={<Dashboard isLoggedIn={isLoggedIn}/>}>
    //     <Route path="/auth/login" element={<LoginScreen />} />
    //     <Route path="/auth/register" element={<RegisterScreen />} />
    //     <Route path="/" element={<Books />} />
    //     <Route path="/add" element={<BookForm />} />
    //     <Route path="book/:id" element={<Book />} />
    //   </Route>
    // )
  );

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
