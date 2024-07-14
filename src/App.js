import React, { Suspense, lazy, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Contact from "./pages/Contact"; 
import About from "./pages/About"
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantMenu from "./pages/RestaurantMenu";
import UserContext from "./utils/UserContext";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const Grocery = lazy(() => import("./pages/Grocery"))

const App = () => {

  // Authentication
  const [userName, setUserName] = useState('')
  useEffect(() =>{
    const data={
      name: 'Deepanshu Sahu',
    };
    setUserName(data.name)
  }, [])

  return <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div> 
  </UserContext.Provider>
};

const appRouter=createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />
      },
      {
        path: '/grocery',
        element: (<Suspense fallback={<h1>Loading...</h1>} ><Grocery /></Suspense>),
      }
    ],
    errorElement: <Error />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)