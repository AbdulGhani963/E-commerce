import React from "react";
import { useDispatch } from "react-redux";
import { cartProductsActions } from "../../Redux/Slices/cartSlice";

const JeweleryProducts = (props) => {
  const dispatch = useDispatch();
  const addAmountHandler = (id , title, price, category, amount) => {
      dispatch(cartProductsActions.addItem(id, title, price, category, amount));

  }
  return (
    <>
      {props.products.map((jewelery) => {
        return (
          <div key={jewelery.id}>
            <div className="item">
              <div className="thumb">
                <div className="hover-content">
                  <ul>
                    <li>
                      <button>
                        <i className="fa fa-eye"></i>
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="fa fa-star"></i>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => addAmountHandler({id:jewelery.id, title: jewelery.title, price: jewelery.price, category: jewelery.category, amount: 1})}>
                        <i className="fa fa-shopping-cart"></i>
                      </button>
                    </li>
                  </ul>
                </div>
                <img style={{height:'390px'}} src={jewelery.image} alt="jeweley-pic" />
              </div>
              <div className="down-content">
                <h4>{jewelery.title}</h4>
                <span>${jewelery.price}</span>
                <ul className="stars">
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JeweleryProducts;
