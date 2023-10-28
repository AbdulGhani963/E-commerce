import React from "react";
import { useDispatch } from "react-redux";
import { cartProductsActions } from "../../Redux/Slices/cartSlice";

const WomenProducts = (props) => {
  const dispatch = useDispatch();

  const addHandler = (id, title, price, category, amount) => {
    dispatch(cartProductsActions.addItem(id, title, price, category, amount))
  }
  return (
    <>
      {props.products.map((women) => {
        return (
          <div key={women.id}>
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
                      <button onClick={() => addHandler({id: women.id, title: women.title, price: women.price, category: women.category, amount: 1})}>
                        <i className="fa fa-shopping-cart"></i>
                      </button>
                    </li>
                  </ul>
                </div>
                <img style={{height:'390px'}} src={women.image} alt="Women-pic01" />
              </div>
              <div className="down-content">
                <h4>{women.title}</h4>
                <span>${women.price}</span>
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

export default WomenProducts;
