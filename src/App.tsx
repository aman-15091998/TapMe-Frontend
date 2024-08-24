import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Pages/Home Page/Home';

function App() {
  const router=createBrowserRouter([
    {path:"/:id/:username", element:<Home/>}
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
