import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Redux/Slices/cartShow";
// import { cartProductsActions } from "../../Redux/Slices/cartSlice";

import Image from "../../../Images/logo.png";
import CartImage from "../../../Images/shopping-cart(1).png";

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.productsCart.items);

  const numberofCartItems = cartItems.reduce(
    (cartNumber, item) => cartNumber + item.amount,
    0
  );

  // const handleAddItem = (item) => {
  //   dispatch(cartProductsActions.addItem(item))
  // }

  // const handleRemoveItem = (itemId) => {
  //   dispatch(cartProductsActions.removeItem(itemId))
  // }
  
  const showHandler = () => {
    dispatch(cartActions.show());
  };
  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <NavLink to="/" className="logo">
                  <img src={Image} alt="logo" />
                </NavLink>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <NavLink to="/" class="active">
                      Home
                    </NavLink>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#men">Men's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#women">Women's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#kids">Jewelery's</a>
                  </li>
                  <li className="submenu">
                    <a href="www.youtube">Pages</a>
                    <ul>
                      <li>
                        <NavLink to="/AboutPage">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/ProductsPage">Products</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Single Page</NavLink>
                      </li>
                      <li>
                        <NavLink to="/ContactPage">Contact Us</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#explore">Explore</a>
                  </li>
                  <li className="scroll-to-section">
                    <button onClick={showHandler}>
                      <img src={CartImage} alt="cart-img" />
                      Cart({numberofCartItems})
                    </button>
                  </li>
                </ul>
                <a className='menu-trigger'>
                    <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
