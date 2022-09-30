import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';

import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import { Books } from './components/Books';
import { Book } from './components/Book';
import { AuthScreen } from './components/auth/AuthScreen';
import { BookForm } from './components/BookForm';


function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  
  
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>,
        errorElement: <Navigate to="/books" replace={true} />,
        children: [
          {
            path: "auth",
            element: <AuthScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>,
          },
          {
            path: "/books",
            element: <Books />,
          },
          {
            path: ":user/books",
            element: <Books />,
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
