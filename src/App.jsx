import React, { useContext } from "react";
import "./App.css";
import UserContext from "./context/UserContext";
import { Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NewsCard, Home } from "./container";
import UserContextProvider from "./context/UserContextProvider";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
    
      element: (
        <>
          <Navbar />
          <NewsCard newstype="bbc-news" />
        </>
      ),
    },
    {
      path: "/aiml",
      element: (
        <>
          <Navbar />
          <NewsCard newstype="artificial intelligence OR machine learning" />
        </>
      ),
    },
    {
      path: "/India",
      element: (
        <>
          <Navbar />
          <NewsCard newstype="india" />
        </>
      ),
    },
    {
      path: "/World",
      element: (
        <>
          <Navbar />
          <NewsCard newstype="world" />
        </>
      ),
    },

    {
      path: "/sports",
      element: (
        <>
          <Navbar />
          <NewsCard newstype="sports" />
        </>
      ),
    },
    {
      path: "/entertainment",
      element: (
        <>
          <Navbar />
          <NewsCard newstype="entertainment" />
        </>
      ),
    },
    {
      path: "/politics",
      element: (
        <>
          <Navbar />
          <NewsCard newstype="politics" />
        </>
      ),
    },
  ]);
  return (
    <UserContextProvider>
      <div className="app__style">
        <div>
          <RouterProvider router={router} />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
