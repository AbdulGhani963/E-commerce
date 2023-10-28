import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, ContactPage, HomePage, ProductsPage } from './pages';
import { useSelector } from "react-redux";
import Cart from "./Components/Cart/Cart";
// import CheckoutForm from './Components/CheckOut/CheckoutForm';

const router = createBrowserRouter([
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'ProductsPage',
        Component: ProductsPage
      },
      {
        path: 'ContactPage',
        Component: ContactPage
      },
      {
        path: 'AboutPage',
        Component: AboutPage
      }
])

function App() {
  const cartShow = useSelector(state => state.showCart.cartIsShow)
  // const checkOutShow = useSelector(state => state.showCheckOut.checkOutIsShow)
  return (
    <>
      {/* <div id="preloader">
        <div class="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      { cartShow && <Cart />}
      {/* <CheckoutForm /> */}
      <RouterProvider router={router} />  
    </>
  );
}

export default App;
