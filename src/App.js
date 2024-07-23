import React, { Suspense, lazy, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Contact from "./pages/Contact"; 
import About from "./pages/About"
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import RestaurantMenu from "./pages/RestaurantMenu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";
import SideMenu from "./components/SideMenu";
import { useShowSideMenu } from "./hooks/useUser";
import { ToastContainer } from 'react-toastify';
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Settings from "./pages/Settings";
import ManageUsers from "./pages/ManageUsers";

const Grocery = lazy(() => import("./pages/Grocery"))

const App = () => {

  const {showSideMenu, setShowSideMenu} = useShowSideMenu()

  return ( 
    <div className="App">
      <Header sideMenu={() => setShowSideMenu(true)} />
      <SideMenu isOpen={showSideMenu} onClose={() => setShowSideMenu(false)}/>
      <Outlet />
      <Footer />
    </div>)
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
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/admin',
        element: <Admin />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/manageUsers',
        element:  <ManageUsers />
      },
    ],
    errorElement: <Error />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
    <ToastContainer />
  </Provider>
)