import React from "react";
import { useDispatch } from "react-redux";
import { cartProductsActions } from "../../Redux/Slices/cartSlice";


const MenProducts = (props) => {
  console.log('\n\n\n....... inside men productes ......', props)
  const dispatch = useDispatch();

  const addHandler = (id, title, price, category, amount) => {
    dispatch(cartProductsActions.addItem(id, title, price, category, amount))
  }
  
  return (
    <>
      {props.products.map((men, key) => {
        return (
          <div key={key}>
            {console.log('......... product item', men, key)}
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
                      <button onClick={() => addHandler({id: men.id, title:men.title, price: men.price, category: men.category, amount: 1})}>
                        <i className="fa fa-shopping-cart"></i>
                      </button>
                    </li>
                  </ul>
                </div>
                <img style={{height:'390px'}} src={men.image} alt="men-pic" />
              </div>
              <div className="down-content">
                <h4>{men.title}</h4>
                <span>${men.price}</span>
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

export default MenProducts;
