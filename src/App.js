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

const Grocery = lazy(() => import("./pages/Grocery"))

const App = () => {

  const [showSideMenu, setShowSideMenu] = useState(false);

  return <Provider store={store}>
    <div className="App">
      <Header sideMenu={() => setShowSideMenu(true)} />
      <SideMenu isOpen={showSideMenu} onClose={() => setShowSideMenu(false)}/>
      <Outlet />
      <Footer />
    </div> 
    </Provider>
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

    ],
    errorElement: <Error />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)