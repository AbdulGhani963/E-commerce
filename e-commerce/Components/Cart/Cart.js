// const menPrice = useSelector(state => state.productsCart.menPrice);
// const womenPrice = useSelector(state => state.productsCart.womenPrice)
// const jeweleryPrice = useSelector(state => state.productsCart.jeweleryPrice)
import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { cartActions } from "../Redux/Slices/cartShow";
import { cartProductsActions } from "../Redux/Slices/cartSlice";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.productsCart.items);
  const totalAmount = useSelector((state) =>
    state.productsCart.totalAmount.toFixed(2)
  );
  const hasItems = cartItems.length > 0;

  const handleAddItem = (item) => {
    dispatch(cartProductsActions.addItem({ ...item, amount: 1 }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(cartProductsActions.removeItem(itemId));
  };

  const closeHandler = () => {
    dispatch(cartActions.close());
  };

  const cartProducts = (
    <ul className={classes['cart-items']}>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={ () => handleRemoveItem(item.id)}
          onAdd={() => handleAddItem(item)}
        />
      ))}
    </ul>
  );

  return (
    <>
      <Modal onClose={closeHandler}>
        {cartProducts}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={closeHandler}>
            Close
          </button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
    </>
  );
};

export default Cart;
