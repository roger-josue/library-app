import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
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
        element: <Dashboard isLoggedIn={isLoggedIn}/>,
        children: [
          {
            path: "auth",
            element: <AuthScreen setIsLoggedIn={setIsLoggedIn}/>,
          },
          {
            path: "",
            element: <Books />,
          },
          {
            path: "add",
            element: <BookForm />,
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
